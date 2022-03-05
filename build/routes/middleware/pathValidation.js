"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const pathValidation = (req, res, next) => {
    const imagePath = path_1.default.resolve(`assets/full/${req.query.name}`);
    const { name } = req.query;
    const { width } = req.query;
    const { height } = req.query;
    if (!(name && width && height)) {
        res.status(400);
        next('The following error occured processing your image remedy and '
            + "try again: Error: Something is missing, specify image's name, width and height");
    }
    else if (isNaN(parseInt(width))
        || isNaN(parseInt(height))) {
        next('The following error occured processing your image remedy and '
            + 'try again: Error: Use valid numbers for width and height');
    }
    else if (fs_1.default.existsSync(imagePath)) {
        next();
    }
    else {
        res.status(400);
        next('The following error occured processing your image remedy and '
            + 'try again: Error: Invalid file name');
    }
};
exports.default = pathValidation;
//# sourceMappingURL=pathValidation.js.map