var express = require('express');
var router = express.Router();
var users = require('./routes/users');

/* router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express'
  });
}); */

router.use('/user', users);

module.exports = router;