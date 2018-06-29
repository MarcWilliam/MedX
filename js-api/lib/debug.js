/*
var TruffleContract = require("truffle-contract");
var LightWallet = require("eth-lightwallet");
import MedX from "./index";

async function t() {
    var medX = await MedX.init({
        TruffleContract: TruffleContract,
        LightWallet: LightWallet,
        server: MedX.SERVERS.LOCALHOST,
        passwordGetter: function () { console.log("get"); return "aaaa"; },
        passwordSetter: function () { console.log("set"); return "aaaa"; }
    });
    let result = await medX.KeystoreFactory.create();
    console.log(result);
}
t();
*/ 
//# sourceMappingURL=debug.js.map