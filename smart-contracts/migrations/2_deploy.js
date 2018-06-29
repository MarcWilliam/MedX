const RecordFactory = artifacts.require("RecordFactory");
const KeystoreFactory = artifacts.require("KeystoreFactory");


module.exports = function (deployer) {
    deployer.deploy(KeystoreFactory)
        .then(() => deployer.deploy(RecordFactory, KeystoreFactory.address))
};