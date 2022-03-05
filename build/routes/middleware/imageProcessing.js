"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const createThumb_1 = __importDefault(require("./helpers/createThumb"));
const imageProcessor = express_1.default.Router();
imageProcessor.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const width = ((_a = req.query.width) === null || _a === void 0 ? void 0 : _a.toString()) || '400';
    const height = ((_b = req.query.height) === null || _b === void 0 ? void 0 : _b.toString()) || '400';
    const imageName = ((_c = req.query.name) === null || _c === void 0 ? void 0 : _c.toString()) || '';
    const imagePath = path_1.default.resolve(`assets/full/${imageName}`);
    const thumbPath = path_1.default.resolve(`assets/thumb/${width}x${height}-${imageName}`);
    if (fs_1.default.existsSync(thumbPath)) {
        res.sendFile(thumbPath);
    }
    else {
        yield (0, createThumb_1.default)(parseInt(width), parseInt(height), imagePath, thumbPath);
        res.sendFile(thumbPath);
    }
}));
exports.default = imageProcessor;
//# sourceMappingURL=imageProcessing.js.map