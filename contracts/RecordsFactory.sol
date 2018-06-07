pragma solidity ^0.4.23;

import "./Record.sol";

contract RecordFactory {


    function create(
        address _patient,
        string _patientKey,
        string _doctorsKey,
        Record.EncryptedFile _record,
        Record.EncryptedFile[] _attachments
    ) public returns (Record){
        Record rec = new Record(_patient, _record, _attachments);
        return rec;
    }

    function createNoStruct(
        address _patient,
        string _patientKey,
        string _doctorsKey,
        //EncryptedFile _record,
        string _record_filePath,
        string _record_dataHash,
        string _record_hashMethod,
        string _record_encriptionMethod,
        //EncryptedFile[] _attachments,
        string[] _attach_filePath,
        string[] _attach_dataHash,
        string[] _attach_hashMethod,
        string[] _attach_encriptionMethod
        
    ) public returns (Record){

        Record.EncryptedFile[] memory _attachments;
        Record.EncryptedFile memory _record = new Record.EncryptedFile({
            filePath : _record_filePath,
            dataHash : _record_dataHash,
            hashMethod : _record_hashMethod,
            encriptionMethod : _record_encriptionMethod
        });
        
        for (uint index = 0; index < _attach_filePath.length; index++) {
            _attachments[index] = new Record.EncryptedFile({
                filePath : _attach_filePath[index],
                dataHash : _attach_dataHash[index],
                hashMethod : _attach_hashMethod[index],
                encriptionMethod : _attach_encriptionMethod[index]
            });
        }
        
        return create(_patient, _patientKey, _doctorsKey, _record, _attachments);
    }

}
