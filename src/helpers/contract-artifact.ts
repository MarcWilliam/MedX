import request = require('request');
import Config from './config';

//let CONTRACT_NAME = require("medx.sol/build/contracts/{CONTRACT_NAME}.json");
let EncryptedFile = require("medx.sol/build/contracts/EncryptedFile.json");
let Keystore = require("medx.sol/build/contracts/Keystore.json");
let KeystoreFactory = require("medx.sol/build/contracts/KeystoreFactory.json");
let Record = require("medx.sol/build/contracts/Record.json");
let RecordFactory = require("medx.sol/build/contracts/RecordFactory.json");

export class ContractArtifact {

	private static Jsons = {
		//CONTRACT_NAME: CONTRACT_NAME,
		EncryptedFile: EncryptedFile,
		Keystore: Keystore,
		KeystoreFactory: KeystoreFactory,
		Record: Record,
		RecordFactory: RecordFactory,
	}

	/**
	 * 
	 * @param contractName the contract name
	 */
	public static async get(contractName: string): Promise<any> {
		return new Promise((resolve, reject) => {

			var fromLocal = () => {
				this.Jsons[contractName] ? resolve(ContractArtifact.Jsons[contractName]) : reject("the contract name does not exists");
			}

			var fromServer = () => {
				request(
					`${Config.server.CONTRACTS_URL}/${contractName}.json`,
					{ json: true },
					(err, res, body) => {
						err ? fromLocal() : resolve(body)
					}
				);
			}

			return Config.server.CONTRACTS_URL ? fromServer() : fromLocal();
		});
	}
}