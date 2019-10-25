var express = require('express');
var router = express.Router();
const rateLimit = require("express-rate-limit");

const requestLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 10, // start blocking after 10 requests
  message:
    "Too many requests made from this IP, please try again later"
});

/* GET home page. */
router.get('/', requestLimiter, function(req, res, next) {
  res.render('index', { title: 'Find Data', condition: true });
});

router.get('/get/:data', requestLimiter, function(req, res, next) {
  res.render('get', {output: req.params.data});
});

router.post('/get/submit', requestLimiter, function(req, res, next) {
  let data = req.body.data;
  res.redirect('/get/'+ data);
});

module.exports = router;
