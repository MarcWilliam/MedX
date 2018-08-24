pragma solidity ^0.4.24;

import "./Ownable.sol";

contract EncryptedFileFactory is Ownable {

    string[] public EncryptionMethods = ["AES"];

    struct Multihash {
        bytes32 digest;
        uint8 hashFunction;
        uint8 size;
    }

    struct EncryptedFile {
        Multihash filePath;
        Multihash dataHash;
        uint encriptionMethod;
        mapping(address=>bytes32[4]) keys;
    }

    EncryptedFile[] public encryptedFiles;

    event Created(address indexed by, uint indexed encryptedFile);
    event GivenAccess(address indexed by, address indexed to, uint indexed encryptedFile);

    function create(
        address _by,
        address[] _keysOwners,
        bytes32[4][] _keys,
        bytes32 _filePath_digest,
        uint8 _filePath_hashFunction,
        uint8 _filePath_size,
        bytes32 _dataHash_digest,
        uint8 _dataHash_hashFunction,
        uint8 _dataHash_size,
        uint _encriptionMethod
    ) public onlyOwner returns (uint index) {

        index = encryptedFiles.push(EncryptedFile({
            filePath: Multihash({
                digest: _filePath_digest,
                hashFunction: _filePath_hashFunction,
                size: _filePath_size
            }),
            dataHash: Multihash({
                digest: _dataHash_digest,
                hashFunction: _dataHash_hashFunction,
                size: _dataHash_size
            }),
            encriptionMethod: _encriptionMethod
        }));
        index --;
        EncryptedFile storage _encryptedFile = encryptedFiles[i];
        
        for (uint i = 0; i < _keysOwners.length; i++) {
            _encryptedFile.keys[_keysOwners[i]] = [_keys[0][i], _keys[1][i],_keys[2][i], _keys[3][i]];
            emit GivenAccess(_by, _keysOwners[i],index);
        }
    }

    function giveAccess(uint _index, address _to, address _by, bytes32[4] _key) public onlyOwner {
        encryptedFiles[_index].keys[_to] = _key;
        emit GivenAccess(_by, _to, _index);
    }

}
