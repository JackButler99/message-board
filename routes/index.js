var express = require('express');
var router = express.Router();
const moment = require('moment')


// Post Messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toUTCString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toUTCString()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
})

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date().toUTCString()
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
