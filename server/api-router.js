const express = require('express');
const db = require('../db/model.js');
const router = express.Router();

router.route('/:roomid/description')
  .get((req, res, next) => {
    db.findOne(+req.params.roomid)
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(err => {
        console.log('Error retrieving description for room ', req.params.roomid, ' from database');
        res.sendStatus(404);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
