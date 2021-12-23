import express from 'express';
import sharp from 'sharp';
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
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    if (!fs.existsSync(__dirname + '/images/thumbs')) {
        fs.mkdirSync(__dirname + '/images/thumbs');
    }

    if (fs.existsSync(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`)) {
        console.log('cached');
        res.sendFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`);
    } else {
        sharp(__dirname + `/images/${filename}.jpg`)
            .resize(width, height)
            .toFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`, () => {
                console.log('new');
                res.sendFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`);
            });
    }
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
