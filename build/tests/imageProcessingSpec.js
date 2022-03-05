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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createThumb_1 = __importDefault(require("../routes/middleware/helpers/createThumb"));
describe('test create image thumb functionality', () => {
    it('Should create a re-sized image file in the thumb directory', () => __awaiter(void 0, void 0, void 0, function* () {
        const width = '200';
        const height = '300';
        const imageName = 'fjord.jpg';
        const imagePath = path_1.default.resolve(`assets/full/${imageName}`);
        const thumbPath = path_1.default.resolve(`assets/thumb/${width}x${height}-${imageName}`);
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, createThumb_1.default)(parseInt(width), parseInt(height), imagePath, thumbPath);
        })).not.toThrow();
        fs_1.default.unlinkSync(thumbPath);
    }));
});
//# sourceMappingURL=imageProcessingSpec.js.map