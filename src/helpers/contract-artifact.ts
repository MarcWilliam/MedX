import request = require('request');
import Config from './config';

//let CONTRACT_NAME = require("medx.sol/build/contracts/{CONTRACT_NAME}.json");

export class ContractArtifact {

	static Jsons = {
		//CONTRACT_NAME: CONTRACT_NAME,
	}

	/**
	 * 
	 * @param contractName the contract name
	 */
	public static async get(contractName: string): Promise<any> {
		return new Promise((resolve, reject) => {

			var fromLocal = () => {
				this.Jsons[contractName] ? resolve(this.Jsons[contractName]) : reject("the contract name does not exists");
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