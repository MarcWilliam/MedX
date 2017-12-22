"use strict";

var model = require('../models/model');

var control = {};

control.findRecords = async ()=>{
    return (await model.get());
}

control.addRecord = async (param)=>{
    (await model.post(param));
}

control.editRecord = async ()=>{

}

control.removeRecord = async (param)=>{
    (await model.delete(param));
}

module.exports = control;