"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var validateInputs = function (filename, width, height) {
    var valid = true;
    var message = "";
    if (!fs_1.default.existsSync(__dirname + "/images/".concat(filename, ".jpg"))) {
        valid = false;
        message += "No image found with name ".concat(filename, ".jpg <br>");
    }
    if (width <= 0 || height <= 0) {
        valid = false;
        message += "Both width and height must be greater that 0 <br>";
    }
    return { valid: valid, message: message };
};
exports.default = validateInputs;
