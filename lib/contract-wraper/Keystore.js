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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var Keystore = /** @class */ (function (_super) {
    __extends(Keystore, _super);
    function Keystore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Keystore.prototype, "contractName", {
        get: function () { return "Keystore"; },
        enumerable: true,
        configurable: true
    });
    ;
    Keystore.prototype.getAttribs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, result, _a, _b, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 1:
                        contractInstance = _d.sent();
                        _a = {};
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, contractInstance.profile()];
                    case 2:
                        result = (_a.profile = _c.apply(_b, [_d.sent()]),
                            _a);
                        console.log("getAttribs", result);
                        return [2 /*return*/, result];
                    case 3:
                        err_1 = _d.sent();
                        console.warn(err_1.message);
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Keystore.prototype.getKey = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, recAddress, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 1:
                        contractInstance = _a.sent();
                        recAddress = typeof record === 'string' ? record : record.address;
                        return [4 /*yield*/, contractInstance.rec2key(recAddress)];
                    case 2:
                        result = _a.sent();
                        console.log("getAttribs", result);
                        return [2 /*return*/, result];
                    case 3:
                        err_2 = _a.sent();
                        console.warn(err_2.message);
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Keystore.prototype.add = function (record, encKey, extraParams) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Keystore.bind;
                        return [4 /*yield*/, this.genericCall("add", {
                                params: [record, encKey],
                                extraParams: extraParams
                            })];
                    case 1: return [2 /*return*/, new (_a.apply(Keystore, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    return Keystore;
}(contract_1.Contract));
exports.Keystore = Keystore;
//# sourceMappingURL=Keystore.js.map