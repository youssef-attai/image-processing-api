"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcessing_1 = __importDefault(require("./imageProcessing"));
var errorHandling_1 = __importDefault(require("./errorHandling"));
var fs_1 = __importDefault(require("fs"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Image Processing API');
});
app.get('/api', function (req, res) {
    res.send('try it out!<br><br>/api/image?filename={FILENAME}&width={WIDTH}&height={HEIGHT}');
});
app.get('/api/image', function (req, res) {
    if (!(req.query.filename && req.query.width && req.query.height)) {
        res.send('Missing parameters, you have to pass: filename, width, height');
        return;
    }
    if (isNaN(Number(req.query.width)) || isNaN(Number(req.query.height))) {
        res.send('Invalid width or height, make sure they are numbers greater than 0');
        return;
    }
    var filename = req.query.filename;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    var isInputValid = (0, errorHandling_1.default)(filename, width, height);
    if (!isInputValid.valid) {
        res.send(isInputValid.message);
        return;
    }
    if (!fs_1.default.existsSync(__dirname + '/images/thumbs')) {
        fs_1.default.mkdirSync(__dirname + '/images/thumbs');
    }
    if (fs_1.default.existsSync(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"))) {
        console.log('cached');
        res.sendFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"));
    }
    else {
        console.log('new');
        (0, imageProcessing_1.default)(filename, width, height, function () {
            res.sendFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"));
        });
    }
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
