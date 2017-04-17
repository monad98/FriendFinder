var express = require('express');
var router = express.Router();
var controller = require('../controller/html-controller');

router.get('/', controller.renderHome);
router.get('/admin', controller.renderAdmin);
router.get('/survey', controller.renderSurvey);

module.exports = router;
