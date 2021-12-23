# Image Processing API

A simple API for resizing images.

## Technologies used

- TypeScript [https://www.typescriptlang.org/]
- Node.js [https://nodejs.org/en/]
- Express.js [https://expressjs.com/]
- Jasmine [https://jasmine.github.io/]
- Sharp [https://sharp.pixelplumbing.com/]

## How to use

1. Clone the git repo
2. `cd` into the project folder and `npm install`
3. Build the project with `npm run build`
4. Start the server using `npm run start`
5. In your browser, go to http://localhost:3000/api/image?filename=FILENAME&width=WIDTH&height=HEIGHT
where FILENAME is one of the following images name (without the extension, only the filename): 
  - encenadaport.jpg
  - fjord.jpg
  - icelandwaterfall.jpg
  - palmtunnel.jpg
  - santamonica.jpg
and WIDTH and HEIGHT are just the dimensions of the resized image

## Authors

Youssef Galal Atta'i

## Acknowledgments
- [https://www.yonisfy.com/udacity/projects/image-processing-api]
- [https://stackoverflow.com/a/67755220]
- [https://flaviocopes.com/how-to-check-if-file-exists-node/]
- [https://www.geeksforgeeks.org/node-js-fs-mkdirsync-method/]
