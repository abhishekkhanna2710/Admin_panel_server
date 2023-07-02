const express = require('express');
const router = express.Router();


const { getLogin, postLogin } = require("../controllers/Login.conmtrollers")

router.route('/').post(getLogin);
router.route('/post/').post(postLogin);


module.exports = router;