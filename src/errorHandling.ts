import fs from "fs"

type validation = {
    valid: boolean,
    message: string
}

const validateInputs = (filename: string, width: number, height: number): validation => {
    let valid = true;
    let message = "";

    if (!fs.existsSync(__dirname + `/images/${filename}.jpg`)) {
        valid = false;
        message += `No image found with name ${filename}.jpg <br>`;
    }

    if (width <= 0 || height <= 0) {
        valid = false;
        message += `Both width and height must be greater that 0 <br>`;
    }

    return { valid, message };
};

export default validateInputs;