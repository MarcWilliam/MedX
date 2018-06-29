"use strict";
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
var web3_service_1 = require("../helpers/web3-service");
var Contract = /** @class */ (function () {
    function Contract(address) {
        this._address = address;
    }
    Object.defineProperty(Contract.prototype, "address", {
        get: function () { return this._address; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {TruffleContract} the contract
     */
    Contract.prototype.getContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            var web3ServiceInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (web3_service_1.Web3Service.getInstance())];
                    case 1:
                        web3ServiceInstance = _a.sent();
                        return [2 /*return*/, web3ServiceInstance.getContract(this.contractName)];
                }
            });
        });
    };
    /**
     * @return {TruffleContract Instance} the contract instance
     */
    Contract.prototype.getContractInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContract()];
                    case 1:
                        contract = _a.sent();
                        return [2 /*return*/, this.address ? contract.at(this.address) : contract.deployed()];
                }
            });
        });
    };
    Contract.prototype.getAttribs = function (attribs) {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, result, _a, _b, _i, i, attName, _c, _d, err_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!attribs)
                            throw ("please provide attrib parameters to .getAttribs([\"attrib1\", \"attrib2\"])");
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 2:
                        contractInstance = _e.sent();
                        result = {};
                        _a = [];
                        for (_b in attribs)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        i = _a[_i];
                        attName = attribs[i];
                        _c = result;
                        _d = attName;
                        return [4 /*yield*/, contractInstance[attName]()];
                    case 4:
                        _c[_d] = _e.sent();
                        _e.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        console.log("getAttribs", result);
                        return [2 /*return*/, result];
                    case 7:
                        err_1 = _e.sent();
                        console.warn(err_1.message);
                        throw err_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Contract.prototype.genericCall = function (functionName, args) {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, params, extraParams, web3ServiceInstance, _a, result, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 1:
                        contractInstance = _b.sent();
                        params = (args && args.params) ? args.params : [];
                        extraParams = (args && args.extraParams) ? args.extraParams : {};
                        if (!(extraParams.from == null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (web3_service_1.Web3Service.getInstance())];
                    case 2:
                        web3ServiceInstance = _b.sent();
                        _a = extraParams;
                        return [4 /*yield*/, web3ServiceInstance.getAccount()];
                    case 3:
                        _a.from = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (extraParams.gas == null) {
                            extraParams.gas = 5000000;
                        }
                        return [4 /*yield*/, contractInstance[functionName].apply(contractInstance, params.concat([extraParams]))];
                    case 5:
                        result = _b.sent();
                        console.log(functionName, result);
                        return [2 /*return*/, result];
                    case 6:
                        err_2 = _b.sent();
                        console.warn(functionName, err_2.message);
                        throw err_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Contract.prototype.genericEvent = function (eventName, extraParams) {
        return __awaiter(this, void 0, void 0, function () {
            var contractInstance, web3ServiceInstance, account, event, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.getContractInstance()];
                    case 1:
                        contractInstance = _a.sent();
                        return [4 /*yield*/, (web3_service_1.Web3Service.getInstance())];
                    case 2:
                        web3ServiceInstance = _a.sent();
                        return [4 /*yield*/, web3ServiceInstance.getAccount()];
                    case 3:
                        account = _a.sent();
                        extraParams = extraParams || {};
                        extraParams.fromBlock = extraParams.fromBlock || 0;
                        extraParams.toBlock = extraParams.toBlock || 'latest';
                        return [4 /*yield*/, contractInstance[eventName]({ _from: account }, { fromBlock: extraParams.fromBlock, toBlock: extraParams.toBlock, filter: extraParams.filter })];
                    case 4:
                        event = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                event.get(function (error, logs) { return error ? reject(error) : resolve(logs); });
                            })];
                    case 5:
                        result = _a.sent();
                        console.log(eventName, result);
                        return [2 /*return*/, result];
                    case 6:
                        err_3 = _a.sent();
                        console.warn(err_3.message);
                        throw err_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Contract;
}());
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map