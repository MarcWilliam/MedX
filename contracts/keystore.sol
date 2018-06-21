pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Record.sol";

contract Keystore is Ownable {

    string public profile;

    constructor ( string _profile) public {
        profile = _profile;
    }

    function setProfile(string _profile) public {
        profile = _profile;
    }

    mapping(address=>string) public rec2key;

    event added(Record record, address addedby);

    function add(Record _record, string _encKey) public {
        require(bytes(rec2key[_record]).length == 0); // to protect aggainst enpty keystore attak
        rec2key[_record] = _encKey;
        emit added(_record, msg.sender);
    }
}
