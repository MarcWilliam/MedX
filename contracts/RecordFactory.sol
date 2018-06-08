pragma solidity ^0.4.23;

import "./Record.sol";
import "./KeystoreFactory.sol";

contract RecordFactory {

    KeystoreFactory KSFactory;

    constructor(KeystoreFactory _KSFactory) public {
        KSFactory = _KSFactory;
    }

    event Created(address patient, address doctor, Record record);

    function create(
        address _patient,
        string _patientKey,
        string _doctorsKey,
        EncryptedFile _record,
        EncryptedFile[] _attachments
    ) public returns (Record rec) {
        rec = new Record(_patient, _record, _attachments);
        KSFactory.owners(_patient).add(rec, _patientKey);
        KSFactory.owners(msg.sender).add(rec, _doctorsKey);
        emit Created(_patient, msg.sender, rec);
    }

    function createQuick(
        address _patient,
        string _patientKey,
        string _doctorsKey,
        string _record_filePath,
        string _record_dataHash,
        string _record_hashMethod,
        string _record_encriptionMethod,
        EncryptedFile[] _attachments
    ) public returns (Record) {
        EncryptedFile _record = new EncryptedFile(
            _record_filePath,
            _record_dataHash,
            _record_hashMethod,
            _record_encriptionMethod
        );
        
        return create(_patient, _patientKey, _doctorsKey, _record, _attachments);
    }

}
