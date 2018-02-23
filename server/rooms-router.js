const express = require('express');
const db = require('../db/model.js');
const router = express.Router();

router.route('/:roomid')
  .get((req, res, next) => {
    debugger;
    db.findOne(req.params.roomid)
      .then((doc) => {
        debugger;
        res.json(doc);
      })
      .catch(err => {
        debugger;
        console.log('Error retrieving description for room ', req.params.roomid, ' from database');
        res.sendStatus(404);
      });
  });

module.exports = router;
