"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageProcessing_1 = __importDefault(require("../imageProcessing"));
describe('test resizeImage function', function () {
    it('expect resizeImage() to return relative path to resized image', function () {
        expect((0, imageProcessing_1.default)('fjord', 200, 100)).toEqual('/images/thumbs/fjord_200_100.jpg');
    });
});
