pragma solidity ^0.4.23;

contract EncryptedFile {

    string public filePath;
    string public dataHash;
    string public hashMethod;
    string public encriptionMethod;

    constructor(
        string _filePath,
        string _dataHash,
        string _hashMethod,
        string _encriptionMethod
    ) public {
        filePath = _filePath;
        dataHash = _dataHash;
        hashMethod = _hashMethod;
        encriptionMethod = _encriptionMethod;
    }

}
