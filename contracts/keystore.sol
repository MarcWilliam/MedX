pragma solidity ^0.4.23;

import "./Record.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Keystore is Ownable {

    struct Store {
        Record record;
        string encKey;
    }

    address patientProfile;

    Store[] stores;

    event added(address record, address addedby, uint indexed index);

    function add(Record _record, string _encKey) public returns (uint index) {

        index = stores.push(Store({record: _record, encKey: _encKey})) - 1;
        emit added(_record, msg.sender, index);
        
    }

}
