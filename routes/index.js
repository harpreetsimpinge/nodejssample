var express = require('express');

var router = express.Router();

var apiPath = "/api";

var user = require('./user');

// routes

router.post(apiPath + '/user/login', user.login);
router.post(apiPath + '/user/create', user.create);
router.post(apiPath + '/user/logout', user.logout);
router.get(apiPath + '/user/getall', user.getAll);
router.post(apiPath + '/user/info', user.userInfo);


module.exports = router;




