//import LightWallet = require("eth-lightwallet");
import store = require('store');
import Config from './config';

import { generatedPasswordLength, generateString } from './utils';

export class Web3Wallet {

	private static _instance: Web3Wallet;

	private lightWallet;
	private _keyStore;
	private _address;

	private constructor() { }

	private async _init() {
		try {
			let password = "";
			this.lightWallet = Config.LightWallet;
			let serialized_keystore = store.get('ks');

			if (serialized_keystore) {
				password = this._getPassword();
				this._keyStore = this.lightWallet.keystore.deserialize(serialized_keystore);
			}
			else {
				password = this._setPassword();
				//const extraEntropy = generateString(generatedPasswordLength);

				const randomSeed = Config.IsProduction ?
					this.lightWallet.keystore.generateRandomSeed(/*extraEntropy*/) :
					Config.DevMnemonic

				this._keyStore = await (this._createKeyStore(password, randomSeed));

				store.set('ks', this._keyStore.serialize());
			}
			this._keyStore.passwordProvider = this._passwordProvider.bind(this);

			this._address = await (this._generateAddresses(password)) ? this._keyStore.getAddresses()[0] : "";
		}
		catch (err) {
			throw err;
		}
		return this;
	}

	private _createKeyStore(password: string, randomSeed: string) {
		return new Promise((resolve, reject) => {
			this.lightWallet.keystore.createVault({
				password: password,
				seedPhrase: randomSeed,
				//random salt 
				hdPathString: Config.server.HD_PATH
			}, (err, keyStore) => {
				if (err) {
					console.warn("_createKeyStore", err);
					reject(err);
				}
				else resolve(keyStore);
			});
		});
	}

	private async _passwordProvider(callback) {

		let password = this._getPassword();

		if (password) {

			let pwDerivedKey = await this._keyFromPassword(password);
			if (!this._keyStore.isDerivedKeyCorrect(pwDerivedKey)) {
				callback("Incorrect Password!");
			} else { // correct password
				callback(null, password);
			}

		} else { // !password (empty)
			callback("Password is required!");
		}
	}

	private _keyFromPassword(password: string) {
		return new Promise((resolve, reject) => {
			this._keyStore.keyFromPassword(password, (err, pwDerivedKey) => {
				if (err) {
					console.warn("_keyFromPassword", err);
					reject(err);
				}
				else resolve(pwDerivedKey);
			});
		});
	}

	private async _generateAddresses(password: string, numberOfAddresses: number = 1) {
		try {
			let pwDerivedKey = await (this._keyFromPassword(password));
			this._keyStore.generateNewAddress(pwDerivedKey, numberOfAddresses);
			return true;
		}
		catch (err) {
			console.warn("_generateAddresses", err);
			throw err;
		}
	}

	private _getPassword() {
		let error = "";

		if (typeof Config.passwordGetter !== "function") {
			error = "'Web3-wallet' - '_getPassword' - Must provide 'PasswordGetter' function (Use 'MedX.setPasswordGetter' function to provide it)";
			console.warn(error);
			throw new Error(error);
		}

		let password = Config.passwordGetter();
		if (password) {
			return password;
		}
	}

	private _setPassword() {
		let error = "";

		if (typeof Config.passwordSetter !== "function") {
			error = "'Web3-wallet' - '_setPassword' - Must provide 'passwordSetter' function (Use 'MedX.setPasswordSetter' function to provide it)";
			console.warn(error);
			throw new Error(error);
		}

		let password = Config.passwordSetter();
		if (password) {
			return password;
		}
	}

	public async getAddress() {
		if (!this._address) {
			this._address = await this._keyStore.getAddresses()[0];
		}
		return this._address;
	}

	public get keyStore() {
		return this._keyStore;
	}

	public static async getInstance() {
		try {
			if (!Web3Wallet._instance) {
				Web3Wallet._instance = await new Web3Wallet()._init();
			}
		}
		catch (err) {
			throw err;
		}
		return Web3Wallet._instance;
	}
}
