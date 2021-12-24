import validateInputs from '../errorHandling';

describe('test validateInputs function', () => {
    it('expect validateInputs("", 200, 200) to return invalid', () => {
        expect(validateInputs('', 200, 200).valid).toBeFalse;
    });

    it('expect validateInputs("fjord", 0, 200) to return invalid', () => {
        expect(validateInputs('fjord', 0, 200).valid).toBeFalse;
    });

    it('expect validateInputs("fjord", 200, 0) to return invalid', () => {
        expect(validateInputs('fjord', 200, 0).valid).toBeFalse;
    });

    it('expect validateInputs("fjord", 200, 200) to return valid', () => {
        expect(validateInputs('fjord', 200, 200).valid).toBeTrue;
    });
});
