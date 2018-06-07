pragma solidity ^0.4.23;

import "./Record.sol";

contract RecordFactory {

    function create(
        address _patient,
        EncryptedFile _record,
        //EncryptedFile[] _attachments,
        string[] _filePath,
        string[] _dataHash,
        string[] _hashMethod,
        string[] _encriptionMethod
    ) public returns (Record){
        EncryptedFile[] _attachments;
        for (var index = 0; index < _filePath.length; index++) {
            _attachments[index] = new EncriptedFile(_filePath[index], _dataHash[index], _hashMethod[index], _encriptionMethod[index]);
        }
        Record rec = new Record(_patient, _record, _attachments);
        return rec;
    }

}
