"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
/*

I wanted to
res.sendFile(__dirname + `../images/thumbs/${filename}_${width}_${height}.jpg`);
without passing res, so I decided to pass a callback function that will only do this line

*/
var resizeImage = function (filename, width, height, callback) {
    (0, sharp_1.default)(__dirname + "/images/".concat(filename, ".jpg"))
        .resize(width, height)
        .toFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"), function () {
        if (callback)
            callback();
    });
    return "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg");
};
exports.default = resizeImage;
