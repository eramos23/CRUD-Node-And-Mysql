var express = require('express');
var router = express.Router();
var DisplayAllRecords = require("../routes/displayAllRecords");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/list', DisplayAllRecords);

module.exports = router;
