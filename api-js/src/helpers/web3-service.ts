let Web3 = require('web3');

import CONFIG from './config';

export class Web3Service {

	public static web3 = new Web3(Web3.givenProvider || CONFIG.SERVER.HTTP_PROVIDER);

	private constructor() { }

	/**
 	* get the first account
 	*/
	public static async getAccount(index = 0): Promise<string> {
		return (await this.web3.eth.getaccount())[index];
	}

}
