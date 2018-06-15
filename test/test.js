var assert = require('chai').assert;

var TruffleContract = require("truffle-contract");
var LightWallet = require("eth-lightwallet");

var MedX = require('../lib/index');
var medX = new MedX({
    TruffleContract: TruffleContract,
    LightWallet: LightWallet,
    server: MedX.SERVERS.LOCALHOST,
    passwordGetter: function () { return "aaaa"; },
    passwordSetter: function () { return "aaaa"; }
});

MedX.setPasswordGetter(function () { return "aaaa"; });
MedX.setPasswordSetter(function () { return "aaaa"; });

describe('KeystoreFactory', () => {
    describe('#create()', () => {
        it('should return keystore when none exists or error if user have keystore', () => {
            let result = medX.KeystoreFactory.create();
            //assert.equal(result.address, true);
        });
    });
});