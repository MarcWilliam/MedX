pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import "./Ownable.sol";

contract EncryptedFileFactory is Ownable {

    string[] public HashMethods = ["SHA-512"]; 
    string[] public EncryptionMethods = ["AES"];

    struct EncryptedFile {
        string filePath;
        string dataHash;
        uint hashMethod;
        uint encriptionMethod;
        mapping(address=>string) keys;
    }

    EncryptedFile[] public encryptedFiles;

    event Created(address indexed by, uint indexed encryptedFile);
    event GivenAccess(address indexed by, address indexed to, uint indexed encryptedFile);

    function create(
        address _by,
        address[] _keysOwners,
        string[] _keys,
        string _filePath,
        string _dataHash,
        uint _hashMethod,
        uint _encriptionMethod
    ) public onlyOwner returns (uint index) {

        index = encryptedFiles.push(EncryptedFile({
            filePath: _filePath,
            dataHash: _dataHash,
            hashMethod: _hashMethod,
            encriptionMethod: _encriptionMethod
        }));
        index --;
        EncryptedFile storage _encryptedFile = encryptedFiles[i];
        
        for (uint i = 0; i < _keys.length; i++) {
            _encryptedFile.keys[_keysOwners[i]] = _keys[i];
            emit GivenAccess(_by, _keysOwners[i],index);
        }
    }

    function giveAccess(uint _index, address _to, address _by, string _key) public onlyOwner {
        encryptedFiles[_index].keys[_to] = _key;
        emit GivenAccess(_by, _to, _index);
    }

}
