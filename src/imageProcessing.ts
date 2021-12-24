import sharp from 'sharp';

/*

I wanted to 
res.sendFile(__dirname + `../images/thumbs/${filename}_${width}_${height}.jpg`); 
without passing res, so I decided to pass a callback function that will only do this line

*/
const resizeImage = (
    filename: string,
    width: number,
    height: number,
    callback?: () => void,
): string => {
    sharp(__dirname + `/images/${filename}.jpg`)
        .resize(width, height)
        .toFile(__dirname + `/images/thumbs/${filename}_${width}_${height}.jpg`, () => {
            if (callback) callback();
        });
    return `/images/thumbs/${filename}_${width}_${height}.jpg`;
};

export default resizeImage;
