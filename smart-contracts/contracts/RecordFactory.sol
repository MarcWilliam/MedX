pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Record.sol";
import "./KeystoreFactory.sol";

contract RecordFactory is Ownable {

    struct Record {
        address patient;
        address doctor;

        uint record;
        uint[] attachments;
    }

    Record[] records;

    event Created(address indexed patient,address indexed doctor, uint indexed record);

    function create(
        address _patient,
        address _doctor,
        uint _record,
        uint[] _attachments
    ) public onlyOwner returns (uint index, Record rec) {

        rec = Record({
            patient: _patient,
            doctor: _doctor,
            record: _record,
            attachments: _attachments
        });

        index = records.push(rec) - 1;
        emit Created(_patient, msg.sender, index);
    }

}
