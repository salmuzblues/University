var express = require('express');
var router = express.Router();
const db = require('../config/database.js'); 

router.get('/getAll', async function(req, res) {
  const users = await db.select()
  .from('common.users'); 
  res.send(users);
});

module.exports = router;