"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var contract_1 = require("./contract");
var EncryptedFile = /** @class */ (function (_super) {
    __extends(EncryptedFile, _super);
    function EncryptedFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EncryptedFile.prototype, "contractName", {
        get: function () { return "EncryptedFile"; },
        enumerable: true,
        configurable: true
    });
    ;
    EncryptedFile.prototype.getAttribs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, result, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 1:
                        contractInstance = _b.sent();
                        _a = {};
                        return [4 /*yield*/, contractInstance.filePath()];
                    case 2:
                        _a.filePath = _b.sent();
                        return [4 /*yield*/, contractInstance.dataHash()];
                    case 3:
                        _a.dataHash = _b.sent();
                        return [4 /*yield*/, contractInstance.hashMethod()];
                    case 4:
                        _a.hashMethod = _b.sent();
                        return [4 /*yield*/, contractInstance.encriptionMethod()];
                    case 5:
                        result = (_a.encriptionMethod = _b.sent(),
                            _a);
                        console.log("getAttribs", result);
                        return [2 /*return*/, result];
                    case 6:
                        err_1 = _b.sent();
                        console.warn(err_1.message);
                        throw err_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return EncryptedFile;
}(contract_1.Contract));
exports.EncryptedFile = EncryptedFile;
//# sourceMappingURL=EncryptedFile.js.map