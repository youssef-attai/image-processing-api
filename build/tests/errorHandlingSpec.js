"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandling_1 = __importDefault(require("../errorHandling"));
describe('test validateInputs function', function () {
    it('expect validateInputs("", 200, 200) to return invalid', function () {
        expect((0, errorHandling_1.default)("", 200, 200).valid).toBeFalse;
    });
    it('expect validateInputs("fjord", 0, 200) to return invalid', function () {
        expect((0, errorHandling_1.default)("fjord", 0, 200).valid).toBeFalse;
    });
    it('expect validateInputs("fjord", 200, 0) to return invalid', function () {
        expect((0, errorHandling_1.default)("fjord", 200, 0).valid).toBeFalse;
    });
    it('expect validateInputs("fjord", 200, 200) to return valid', function () {
        expect((0, errorHandling_1.default)("fjord", 200, 200).valid).toBeTrue;
    });
});
