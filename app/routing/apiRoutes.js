var express = require('express');
var router = express.Router();
var controller = require('../controller/api-controller');

/* API endpoint */
router.get('/friends', controller.list);
router.post('/friends', controller.getCompatibleFriends);
router.post('/admin', controller.modifyQuestions);


module.exports = router;
