const MedX = artifacts.require("MedX");

module.exports = function (deployer) {
    deployer.deploy(MedX);
        //.then(() => deployer.deploy(RecordFactory, KeystoreFactory.address))
};