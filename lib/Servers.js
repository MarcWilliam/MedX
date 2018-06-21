"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SERVERS = {
    LOCALHOST: {
        STATISTICS_API: "http://localhost:8064/api/",
        HTTP_PROVIDER: 'http://localhost:8545',
        CONTRACTS_URL: 'http://localhost:3000',
        NETWORK_ID: 5777,
        HD_PATH: "m/44'/60'/0'/0" // BIP44 
    },
    RINKEBY: {
        STATISTICS_API: null,
        HTTP_PROVIDER: 'https://rinkeby.infura.io/39L4CW0Z7li9TKB58aTN',
        CONTRACTS_URL: null,
        NETWORK_ID: 4,
        HD_PATH: "m/44'/60'/0'/0" // BIP44 
    }
};
exports.default = SERVERS;
//# sourceMappingURL=Servers.js.map