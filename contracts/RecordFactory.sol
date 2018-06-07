pragma solidity ^0.4.23;

import "./Record.sol";
import "./KeystoreFactory.sol";

contract RecordFactory {

    KeystoreFactory KSFactory;

    constructor(KeystoreFactory _KSFactory) public {
        KSFactory = _KSFactory;
    }

    function create(
        address _patient,
        Keystore _patientKS,
        Keystore _doctorKS,
        string _patientKey,
        string _doctorsKey,
        EncryptedFile _record,
        EncryptedFile[] _attachments
    ) public returns (Record){
        Record rec = new Record(_patient, _record, _attachments);
        _patientKS.add(rec, _patientKey);
        _doctorKS.add(rec, _doctorsKey);
        return rec;
    }

    function createQuick(
        address _patient,
        Keystore _patientKS,
        Keystore _doctorKS,
        string _patientKey,
        string _doctorsKey,
        string _record_filePath,
        string _record_dataHash,
        string _record_hashMethod,
        string _record_encriptionMethod,
        EncryptedFile[] _attachments
    ) public returns (Record){
        EncryptedFile _record = new EncryptedFile(
            _record_filePath,
            _record_dataHash,
            _record_hashMethod,
            _record_encriptionMethod
        );
        
        return create(_patient, _patientKS, _doctorKS, _patientKey, _doctorsKey, _record, _attachments);
    }

}
