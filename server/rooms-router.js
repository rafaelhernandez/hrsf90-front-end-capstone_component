const express = require('express');
const path = require('path');
const router = express.Router();

router.route('/:roomid/description')
  .get((req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}))
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
