pragma solidity ^0.4.17;

import './EncryptedDocument.sol';
import './EncryptedAttachment.sol';
import './Medicine.sol';

contract Record {

  address public patient;
  address public doctor;
  uint256 createdAt;

  EncryptedDocument public document;
  EncryptedAttachment[] public attachments;
  Medicine[] public medicines;

}
