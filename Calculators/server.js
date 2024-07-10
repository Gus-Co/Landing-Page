const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb' }));

app.post('/save-quote', (req, res) => {
    const { pdfData, fileName } = req.body;
    const filePath = path.join(__dirname, 'quotes', fileName);

    // Convert base64 data to binary buffer
    const pdfBuffer = Buffer.from(pdfData, 'base64');

    // Save the PDF file to the specified path
    fs.writeFile(filePath, pdfBuffer, (err) => {
        if (err) {
            console.error('Error saving the file:', err);
            return res.status(500).send('Error saving the file');
        }
        res.send('File saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
