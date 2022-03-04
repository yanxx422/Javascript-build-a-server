"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pathValidation_1 = __importDefault(require("./middleware/pathValidation"));
const imageProcessing_1 = __importDefault(require("./middleware/imageProcessing"));
const routers = express_1.default.Router();
const middleware = [pathValidation_1.default, imageProcessing_1.default];
routers.use("/image", middleware, (req, res) => {
    res.send("success!");
});
exports.default = routers;
