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
var Web3 = require('web3');
var web3_provider_1 = require("./web3-provider");
var web3_wallet_1 = require("./web3-wallet");
var contract_artifact_1 = require("./contract-artifact");
var config_1 = require("./config");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        this._provider = web3_provider_1.Web3Provider.Instance;
        this._contracts = {};
    }
    Web3Service.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, web3_wallet_1.Web3Wallet.getInstance()];
                    case 1:
                        _a._wallet = _b.sent();
                        this._provider.setHookedWallet(this._wallet.keyStore);
                        this._provider.setRpc(config_1.default.server.HTTP_PROVIDER);
                        this._provider.stopPolling();
                        this._provider.startPolling();
                        this._web3 = new Web3(this._provider.engine);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        throw err_1;
                    case 3: return [2 /*return*/, this];
                }
            });
        });
    };
    Web3Service.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, balance, _a, _b, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, (this._wallet.getAddress())];
                    case 1:
                        address = _c.sent();
                        _b = (_a = this._web3.utils).fromWei;
                        return [4 /*yield*/, (this._web3.eth.getBalance(address))];
                    case 2:
                        balance = _b.apply(_a, [_c.sent(), "ether"]);
                        return [2 /*return*/, balance];
                    case 3:
                        err_2 = _c.sent();
                        console.warn("getBalance", err_2);
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Web3Service.prototype.testSend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fromAddr, toAddr, valueEth, value, gasPrice, gas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromAddr = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
                        return [4 /*yield*/, (this._wallet.getAddress())];
                    case 1:
                        toAddr = _a.sent();
                        valueEth = "1";
                        value = parseFloat(valueEth) * 1.0e18;
                        gasPrice = 1;
                        gas = 55555555555;
                        this._web3.eth.sendTransaction({ from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas }, function (err, txhash) {
                            console.log('error: ', err);
                            console.log('txhash: ', txhash);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * get the trufflecontract and cache it in memory
     * @param {string} contractName
     */
    Web3Service.prototype.getContract = function (contractName) {
        return __awaiter(this, void 0, void 0, function () {
            var contractArtifact, contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._contracts[contractName]) {
                            return [2 /*return*/, this._contracts[contractName]];
                        }
                        return [4 /*yield*/, contract_artifact_1.ContractArtifact.get(contractName)];
                    case 1:
                        contractArtifact = _a.sent();
                        contract = config_1.default.TruffleContract(contractArtifact);
                        // var contract = new this.Web3Provider.web3.eth.Contract(contractArtifact);
                        contract.setProvider(this.provider); // Set the provider for our contract.
                        this._contracts[contractName] = contract;
                        // workaround stolen from https://github.com/trufflesuite/truffle-contract/issues/57
                        if (typeof contract.currentProvider.sendAsync !== "function") {
                            contract.currentProvider.sendAsync = function () {
                                return contract.currentProvider.send.apply(contract.currentProvider, arguments);
                            };
                        }
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    /**
    * check if meta mask is used
    */
    Web3Service.prototype.hasMetaMask = function () {
        return ((typeof this._web3 !== "undefined") && (this._web3.currentProvider.isMetaMask === true));
    };
    Web3Service.prototype.isOnProperNetwork = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._web3.eth.net.getNetworkType()
                .then(function (networkType) { return console.log("Network type", networkType); });
            _this._web3.eth.net.getId(function (err, netId) {
                if (err) {
                    console.warn(err);
                    reject(err);
                }
                else {
                    console.log("Network id", netId);
                    if (config_1.default.server.NETWORK_ID == null) {
                        console.warn("no network id specified in config, ignoring network check");
                    }
                    resolve((config_1.default.server.NETWORK_ID == null) || (netId == config_1.default.server.NETWORK_ID));
                }
            });
        });
        return promise;
    };
    Web3Service.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (this._wallet.getAddress())];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, address];
                    case 2:
                        err_3 = _a.sent();
                        console.warn("getAddress", err_3);
                        throw err_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get the first account
    */
    Web3Service.prototype.getAccount = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var address, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (this._wallet.getAddress(index))];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, address];
                    case 2:
                        err_4 = _a.sent();
                        console.warn("getAccount", err_4);
                        throw err_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Web3Service.prototype, "engine", {
        get: function () { return this._provider.engine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web3Service.prototype, "web3", {
        get: function () { return this._web3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web3Service.prototype, "provider", {
        get: function () { return this._web3.currentProvider; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web3Service.prototype, "wallet", {
        get: function () { return this._wallet; },
        enumerable: true,
        configurable: true
    });
    Web3Service.getInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (!!Web3Service._instance) return [3 /*break*/, 2];
                        _a = Web3Service;
                        return [4 /*yield*/, new Web3Service().init()];
                    case 1:
                        _a._instance = _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_5 = _b.sent();
                        throw err_5;
                    case 4: return [2 /*return*/, Web3Service._instance];
                }
            });
        });
    };
    return Web3Service;
}());
exports.Web3Service = Web3Service;
//# sourceMappingURL=web3-service.js.map