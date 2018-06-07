pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Record {

    address public patient;
    address public doctor;
    uint256 public createdAt;

    EncryptedFile public record;
    EncryptedFile[] public attachments;

    struct EncryptedFile {
        string filePath;
        string dataHash;
        string hashMethod;
        string encriptionMethod;
    }

    constructor(
        address _patient,
        EncryptedFile _record,
        EncryptedFile[] _attachments
    ) public {
        patient = _patient;
        doctor = msg.sender;
        createdAt = now;
        record = _record;
        attachments = _attachments;
    }
}
