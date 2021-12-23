"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
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
    var filename = req.query.filename;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (!fs_1.default.existsSync(__dirname + "/images/thumbs")) {
        fs_1.default.mkdirSync(__dirname + "/images/thumbs");
    }
    if (fs_1.default.existsSync(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"))) {
        console.log("cached");
        res.sendFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"));
    }
    else {
        (0, sharp_1.default)(__dirname + "/images/".concat(filename, ".jpg"))
            .resize(width, height)
            .toFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"), function () {
            console.log("new");
            res.sendFile(__dirname + "/images/thumbs/".concat(filename, "_").concat(width, "_").concat(height, ".jpg"));
        });
    }
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
