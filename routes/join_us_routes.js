const express = require('express');
const router = express.Router();


// const { postJoinUs } = require("../controllers/join_us.controller.js");
const { postJoinUs } = require("../controllers/join_us.controller")

router.route('/').post(postJoinUs);


module.exports = router;