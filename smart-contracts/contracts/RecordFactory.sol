pragma solidity ^0.4.24;

import "./Ownable.sol";

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
    ) public onlyOwner returns (uint index) {

        index = records.push(Record({
            patient: _patient,
            doctor: _doctor,
            record: _record,
            attachments: _attachments
        }));
        index --;
        emit Created(_patient, msg.sender, index);
    }

}
