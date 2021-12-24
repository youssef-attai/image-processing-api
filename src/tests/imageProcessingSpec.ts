import resizeImage from '../utilities/imageProcessing';

describe('test resizeImage function', () => {
    it('expect resizeImage() to return relative path to resized image', () => {
        expect(resizeImage('fjord', 200, 100)).toEqual('/images/thumbs/fjord_200_100.jpg');
    });
});
