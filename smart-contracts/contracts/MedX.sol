pragma solidity ^0.4.24;

import "./Ownable.sol";
import "./RecordFactory.sol";
import "./EncryptedFileFactory.sol";

contract MedX is Ownable{
    
    EncryptedFileFactory encyptedFileFactory;
    RecordFactory recordFactory;

    constructor() public {
        encyptedFileFactory = new EncryptedFileFactory();
        recordFactory = new RecordFactory();
    }

    function createRecord(
        address _patient,
        address[] _keysOwners,
        bytes32[4][] _keys,
        bytes32[] _filePath_digest,
        uint8[] _filePath_hashFunction,
        uint8[] _filePath_size,
        bytes32[] _dataHash_digest,
        uint8[] _dataHash_hashFunction,
        uint8[] _dataHash_size,
        uint[] _encriptionMethod
    ) public returns (uint index) {
        uint[] memory attachments;

        for (uint i = 0; i < _encriptionMethod.length; i++) {
            attachments[i] = encyptedFileFactory.create(
                msg.sender, _keysOwners, _keys,
                _filePath_digest[i],
                _filePath_hashFunction[i],
                _filePath_size[i],
                _dataHash_digest[i],
                _dataHash_hashFunction[i],
                _dataHash_size[i],
                _encriptionMethod[i]
            );
        }

        index = recordFactory.create(_patient, msg.sender, attachments);
    }
}