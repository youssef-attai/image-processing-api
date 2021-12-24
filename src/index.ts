import express from 'express';
import resizeImage from './imageProcessing';
import validateInputs from './errorHandling';
import fs from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Image Processing API');
});

app.get('/api', (req, res) => {
    res.send('try it out!<br><br>/api/image?filename={FILENAME}&width={WIDTH}&height={HEIGHT}');
});

app.get('/api/image', (req, res) => {
    if (!(req.query.filename && req.query.width && req.query.height)) {
        res.send("Missing parameters, you have to pass: filename, width, height");
        return;
    }

    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    const isInputValid = validateInputs(filename as string, width, height);
    if (!isInputValid.valid) {
        res.send(isInputValid.message);
        return;
    }

    if (!fs.existsSync(__dirname + '/images/thumbs')) {
        fs.mkdirSync(__dirname + '/images/thumbs');
    }

    if (fs.existsSync(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`)) {
        console.log('cached');
        res.sendFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`);
    } else {
        resizeImage(filename as string, width, height, ()=>{ 
            res.sendFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`); 
        });
    }
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
