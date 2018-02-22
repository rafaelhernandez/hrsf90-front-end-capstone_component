const express = require('express');
const desc = require('./data/airbnb_sample_description.json');
const router = express.Router();

router.route('/:roomid')
  .get((req, res, next) => {
    res.json(desc);
  });

module.exports = router;
