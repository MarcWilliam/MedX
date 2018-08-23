pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

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

    function createRecordFull(
        address _patient,
        string _patientsKey,
        string _doctorsKey,
        string _record_filePath,
        string _record_dataHash,
        uint _record_hashMethod,
        uint _record_encriptionMethod,
        uint[] _attachments
    ) public returns (uint index) {

        string[] memory keys;
        keys[0] = _doctorsKey;
        keys[1] = _patientsKey;

        address[] memory owners;
        owners[0] = msg.sender;
        owners[1] = msg.sender;


        uint recFileIndex = encyptedFileFactory.create(
            msg.sender, owners, keys,
            _record_filePath, _record_dataHash, _record_hashMethod, _record_encriptionMethod
        );

        index = recordFactory.create(
            _patient, msg.sender,
            recFileIndex, new uint[](0)
        );
    }
}