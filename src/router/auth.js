const express = require('express');
const router = express.Router();
 
const AuthController = require('../controller/authController')

router.post('/getalluser',AuthController.getAllUser)
router.post('/getallcomment',AuthController.getallcomment)
router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
router.post('/verifytoken',AuthController.verifyToken)


module.exports = router