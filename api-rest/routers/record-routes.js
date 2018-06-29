"use strict";
var RecordController = require('../controllers/record-controller');
var RecordRouter = require('express').Router();

RecordRouter.get(`/`, RecordController.find.bind(RecordController));
RecordRouter.post(`/`, RecordController.add.bind(RecordController));
RecordRouter.put(`/:id`, RecordController.edit.bind(RecordController));
RecordRouter.delete(`/`, RecordController.remove.bind(RecordController));

module.exports = RecordRouter;