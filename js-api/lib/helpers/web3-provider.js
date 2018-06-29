"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var ProviderEngine = require("web3-provider-engine");
//Provider Engine sub-modules
var HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
var RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js');
var Web3Provider = /** @class */ (function () {
    function Web3Provider() {
        this._engine = new ProviderEngine();
        this.init();
    }
    Web3Provider.prototype.init = function () {
    };
    // data source
    Web3Provider.prototype.setRpc = function (url) {
        this._engine.addProvider(new RpcSubprovider({
            rpcUrl: url || config_1.default.server.HTTP_PROVIDER
        }));
    };
    // id mgmt
    Web3Provider.prototype.setHookedWallet = function (keyStore) {
        this._engine.addProvider(new HookedWalletSubprovider({
            getAccounts: function (cb) {
                cb(null, keyStore.getAddresses());
            },
            signTransaction: keyStore.signTransaction.bind(keyStore)
        }));
    };
    // start polling for blocks
    Web3Provider.prototype.startPolling = function () {
        this._engine.start();
    };
    // stop polling for blocks
    Web3Provider.prototype.stopPolling = function () {
        this._engine.stop();
    };
    Object.defineProperty(Web3Provider.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web3Provider, "Instance", {
        get: function () {
            try {
                if (!Web3Provider._instance) {
                    Web3Provider._instance = new Web3Provider();
                }
            }
            catch (err) {
                throw err;
            }
            return Web3Provider._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Web3Provider;
}());
exports.Web3Provider = Web3Provider;
//# sourceMappingURL=web3-provider.js.map