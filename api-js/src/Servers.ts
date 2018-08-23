export interface ServerInfo {
	STATISTICS_API: string | null,
	HTTP_PROVIDER: string,
	CONTRACTS_URL: string | null,
	IPFS_NODE: string | null,
	NETWORK_ID: number | null,
	HD_PATH: string | null
}

const SERVERS = {
	LOCALHOST: <ServerInfo>{
		STATISTICS_API: 'http://localhost:8064/api/',
		HTTP_PROVIDER: 'http://localhost:8545',
		IPFS_NODE: '/ip4/127.0.0.1/tcp/5001',
		NETWORK_ID: 5777,
		HD_PATH: "m/44'/60'/0'/0" // BIP44 
	},
	RINKEBY: <ServerInfo>{
		STATISTICS_API: null,
		HTTP_PROVIDER: 'https://rinkeby.infura.io/39L4CW0Z7li9TKB58aTN',
		IPFS_NODE: '/ip4/127.0.0.1/tcp/5001',
		NETWORK_ID: 4,
		HD_PATH: "m/44'/60'/0'/0" // BIP44 
	}
};

export default SERVERS;
