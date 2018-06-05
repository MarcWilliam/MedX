import { Web3Service } from './helpers/web3-service';
import SERVERS from './Servers';

//import { CONTRACT_NAME } from './contract-wraper/CONTRACT_NAME';

import Config from './helpers/config';

export default class MedX {
	private static _instance;

	public Web3Service;
	public static SERVERS = SERVERS;

	//public CONTRACT_NAME = CONTRACT_NAME;

	private constructor() { }

	public static setPasswordGetter(passwordGetter) { Config.passwordGetter = passwordGetter; }

	public static setPasswordSetter(passwordSetter) { Config.passwordSetter = passwordSetter; }

	public static async init({
		TruffleContract,
		LightWallet,
		server = SERVERS.LOCALHOST,
		passwordGetter,
		passwordSetter
	}) {
		if (!MedX._instance) {
			Config.TruffleContract = TruffleContract;
			Config.LightWallet = LightWallet;
			Config.server = server;
			Config.passwordGetter = passwordGetter;
			Config.passwordSetter = passwordSetter;

			var ret = new MedX();
			ret.Web3Service = await Web3Service.getInstance();
			MedX._instance = ret;
		}
		return MedX._instance;
	}

}