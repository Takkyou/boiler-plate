const express = require('express');
const { User } = require('../models/User');
const router = express.Router();

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err)
      res.status(400).send({
        success: false,
        err,
      });

    res.status(400).send({
      success: true,
      user,
    });
  });
});

module.exports = router;
