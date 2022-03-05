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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../server/index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Server is running', () => {
    it('Should return 200 status', (done) => {
        request.get('/').expect(200);
        done();
    });
    it('should resize image', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/image/?name=fjord.jpg&width=200&height=300');
        expect(res.status).toBe(200);
    }));
});
//# sourceMappingURL=indexSpec.js.map