"use strict";
var QueryResultController = require('../controllers/query-result-controller');
var QueryResultRouter = require('express').Router();

QueryResultRouter.get(`/`, QueryResultController.find.bind(QueryResultController));
QueryResultRouter.post(`/`, QueryResultController.add.bind(QueryResultController));
QueryResultRouter.put(`/:id`, QueryResultController.edit.bind(QueryResultController));
QueryResultRouter.delete(`/`, QueryResultController.remove.bind(QueryResultController));

module.exports = QueryResultRouter;