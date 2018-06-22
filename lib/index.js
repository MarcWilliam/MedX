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
var web3_service_1 = require("./helpers/web3-service");
var Servers_1 = require("./Servers");
//import { CONTRACT_NAME } from './contract-wraper/CONTRACT_NAME';
var EncryptedFile_1 = require("./contract-wraper/EncryptedFile");
var Keystore_1 = require("./contract-wraper/Keystore");
var KeystoreFactory_1 = require("./contract-wraper/KeystoreFactory");
var Record_1 = require("./contract-wraper/Record");
var RecordFactory_1 = require("./contract-wraper/RecordFactory");
var config_1 = require("./helpers/config");
var MedX = /** @class */ (function () {
    function MedX() {
        //public CONTRACT_NAME = CONTRACT_NAME;
        this.EncryptedFile = EncryptedFile_1.EncryptedFile;
        this.Keystore = Keystore_1.Keystore;
        this.KeystoreFactory = new KeystoreFactory_1.KeystoreFactory();
        this.Record = Record_1.Record;
        this.RecordFactory = new RecordFactory_1.RecordFactory();
    }
    MedX.setPasswordGetter = function (passwordGetter) { config_1.default.passwordGetter = passwordGetter; };
    MedX.setPasswordSetter = function (passwordSetter) { config_1.default.passwordSetter = passwordSetter; };
    MedX.init = function (_a) {
        var TruffleContract = _a.TruffleContract, LightWallet = _a.LightWallet, _b = _a.server, server = _b === void 0 ? Servers_1.default.LOCALHOST : _b, passwordGetter = _a.passwordGetter, passwordSetter = _a.passwordSetter;
        return __awaiter(this, void 0, void 0, function () {
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        config_1.default.TruffleContract = TruffleContract;
                        config_1.default.LightWallet = LightWallet;
                        config_1.default.server = server;
                        config_1.default.passwordGetter = passwordGetter;
                        config_1.default.passwordSetter = passwordSetter;
                        if (!MedX._instance) {
                            MedX._instance = new MedX();
                        }
                        _c = MedX._instance;
                        return [4 /*yield*/, web3_service_1.Web3Service.getInstance()];
                    case 1:
                        _c.Web3Service = _d.sent();
                        return [2 /*return*/, MedX._instance];
                }
            });
        });
    };
    MedX.SERVERS = Servers_1.default;
    return MedX;
}());
exports.default = MedX;
//# sourceMappingURL=index.js.map