pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./KeystoreFactory.sol";

contract EncryptedFileFactory is Ownable {

    bytes32[] public HashMethods = ["SHA-512"]; 
    bytes32[] public EncryptionMethods = ["AES"];

    struct EncryptedFile {
        string filePath;
        string dataHash;
        uint hashMethod;
        uint encriptionMethod;
        mapping(address=>uint) keys;
    }

    EncryptedFile[] public encryptedFiles;

    event Created(address indexed by, uint indexed encryptedFile);
    event GivenAccess(address indexed by, address indexed to, uint indexed encryptedFile);

    function create(
        address _by,
        address[] _keysOwners,
        string[] _Keys,
        string _filePath,
        string _dataHash,
        uint _hashMethod,
        uint _encriptionMethod,
    ) public onlyOwner returns (uint index, EncryptedFile encryptedFile) {

        EncryptedFile _encryptedFile = EncryptedFile({
            filePath: _filePath,
            dataHash: _dataHash,
            hashMethod: _hashMethod,
            encriptionMethod: _encriptionMethod
        });

        for (var i = 0; i < _keys.length; i++) {
            _encryptedFile.keys[_keysOwners[i]] = _key[i];
            emit GivenAccess(_by, _keysOwners[i]);
        }

        index = EncryptedFiles.push(_encryptedFile) - 1;
    }

    function giveAccess(uint _index, address _to, address _by, string _key) public onlyOwner {
        encryptedFiles[_index].keys[_to] = _key;
        emit GivenAccess(_by, _keysOwners[i]);
    }

}
