pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./KeystoreFactory.sol";
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
        string _patientKey,
        string _doctorsKey,
        string _record_filePath,
        string _record_dataHash,
        uint _record_hashMethod,
        uint _record_encriptionMethod,
        uint[] _attachments
    ) public returns (Record) {
        EncryptedFile _record = new EncryptedFile(
            _record_filePath,
            _record_dataHash,
            _record_hashMethod,
            _record_encriptionMethod
        );
        KSFactory.owners(_patient).add(index, _patientKey);
        KSFactory.owners(msg.sender).add(index, _doctorsKey);

        return create(
            _patient,
            _patientKey,
            _doctorsKey,
            _record,
            _attachments
        );
    }
}