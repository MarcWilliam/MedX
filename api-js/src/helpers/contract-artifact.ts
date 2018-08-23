import request = require('request');
import Config from './config';

let Keystore = require("medx.sol/build/contracts/Keystore.json");
let KeystoreFactory = require("medx.sol/build/contracts/KeystoreFactory.json");
let Record = require("medx.sol/build/contracts/Record.json");
let RecordFactory = require("medx.sol/build/contracts/RecordFactory.json");

export class ContractArtifact {
	public static Keystore = Keystore;
	public static KeystoreFactory = KeystoreFactory;
	public static Record = Record;
	public static RecordFactory = RecordFactory;
}