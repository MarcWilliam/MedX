var assert = require('chai').assert;

var TruffleContract = require("truffle-contract");
var LightWallet = require("eth-lightwallet");
var MedX = require('../lib/index').default;


describe('KeystoreFactory', function () {

    var medX;

    before(async function () {
        medX = await MedX.init({
            TruffleContract: TruffleContract,
            LightWallet: LightWallet,
            server: MedX.SERVERS.LOCALHOST,
            passwordGetter: function () { return "aaaa"; },
            passwordSetter: function () { return "aaaa"; }
        });
    });

    describe('#create()', function () {
        this.timeout(10 * 1000);
        it('should return keystore when none exists or error if user have keystore', async function () {
            let result = await medX.KeystoreFactory.create();
            console.log(result);
            assert.exists(result.address);
            assert.typeOf(result.address, 'string')
        });
    });
});