var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "39L4CW0Z7li9TKB58aTN",
	mnemonic = "";


module.exports = {
	networks: {
		ganache: {
			host: "localhost",
			port: 7545,
			gas: 6721975,
			gasPrice: 20000000000,
			network_id: "5777"
		}, testrpc: {
			host: "localhost",
			port: 8545,
			gas: 6721975,
			gasPrice: 20000000000,
			network_id: "*"
		},
		ropsten: {
			provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
			network_id: 3,
			gas: 4712388,
			gasPrice: 100000000000,
		},
		kovan: {
			provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + infura_apikey),
			network_id: 42,
			gas: 6000000,
			gasPrice: 100000000000,
		},
		rinkeby: {
			provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + infura_apikey),
			network_id: 4,
			gas: 6995951,
			gasPrice: 800000000000,
		},
		testrpc: {
			host: "localhost",
			port: 8545,
			network_id: "*"
		},
	}
};