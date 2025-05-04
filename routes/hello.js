var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  const data = { greeting: 'hello ' + req.params.name };
  res.json(data);
});

module.exports = router;
