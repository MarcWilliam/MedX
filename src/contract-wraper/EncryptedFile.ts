import { Contract } from './contract';

export class EncryptedFile extends Contract {

	public get contractName() { return "EncryptedFile" };

	public async getAttribs() {
		try {
			var contractInstance = await this.getContractInstance();

			var result = <EncryptedFileDat> {
				filePath: await contractInstance.filePath(),
				dataHash: await contractInstance.dataHash(),
				hashMethod: await contractInstance.hashMethod(),
				encriptionMethod: await contractInstance.encriptionMethod()
			};

			console.log("getAttribs", result);
			return result;
		} catch (err) {
			console.warn(err.message);
			throw err;
		}
	}

}

export interface EncryptedFileDat {
	filePath: string;
	dataHash: string;
	hashMethod: string;
	encriptionMethod: string;
}