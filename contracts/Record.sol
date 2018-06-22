pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./EncryptedFile.sol";

contract Record {

    address public patient;
    address public doctor;
    uint256 public createdAt;

    EncryptedFile public record;
    EncryptedFile[] public attachments;

    constructor(
        address _patient,
        EncryptedFile _record,
        EncryptedFile[] _attachments
    ) public {
        patient = _patient;
        doctor = tx.origin;
        createdAt = now;
        record = _record;
        attachments = _attachments;
    }
}
