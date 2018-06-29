pragma solidity ^0.4.24;

import "./Keystore.sol";

contract KeystoreFactory {

    mapping(address=>Keystore) public owners;

    event Created(address createdBy);

    function create(string _profile) public returns (Keystore ks){
        require(owners[msg.sender] == address(0x0));
        ks = new Keystore(_profile);
        ks.transferOwnership(msg.sender);
        owners[msg.sender] = ks;
        emit Created(msg.sender);
    }

}
