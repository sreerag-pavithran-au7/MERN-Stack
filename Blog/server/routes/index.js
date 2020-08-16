var express = require('express');
var router = express.Router();

const userController = require('../controllers/userReg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', userController.register);

router.post('/signin', userController.login);

router.post('/add', userController.createPost);

router.get('/viewall', userController.viewAll);

module.exports = router;
