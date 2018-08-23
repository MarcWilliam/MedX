import { Web3Service } from './helpers/web3-service';
import SERVERS, { ServerInfo } from './Servers';

//import { IPFSservice } from './helpers/ipfs-service';
//import { EcnriptionHandler } from './helpers/encription-handler';

import { Keystore } from './contract-wraper/Keystore';
import { KeystoreFactory } from './contract-wraper/KeystoreFactory';
import { Record } from './contract-wraper/Record';
import { RecordFactory } from './contract-wraper/RecordFactory';

import CONFIG from './helpers/config';

export default class MedX {
	private static _instance;

	public Web3Service = Web3Service;
	public static SERVERS = SERVERS;

	//public IPFSservice;
	//public EcnriptionHandler = EcnriptionHandler;

	public Keystore = Keystore;
	public KeystoreFactory = new KeystoreFactory();
	public Record = Record;
	public RecordFactory = new RecordFactory();

	private constructor() { }

	public static setPasswordGetter(passwordGetter) { CONFIG.passwordGetter = passwordGetter; }
	public static setPasswordSetter(passwordSetter) { CONFIG.passwordSetter = passwordSetter; }

	public static async init({
		LightWallet,
		server = SERVERS.LOCALHOST,
		passwordGetter,
		passwordSetter
	}) {
		CONFIG.SERVER = server;
		CONFIG.passwordGetter = passwordGetter;
		CONFIG.passwordSetter = passwordSetter;

		if (!MedX._instance) { MedX._instance = new MedX(); }
		//MedX._instance.IPFSservice = await IPFSservice.init();

		return MedX._instance;
	}

}