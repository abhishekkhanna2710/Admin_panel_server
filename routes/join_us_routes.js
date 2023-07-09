const express = require('express');
const router = express.Router();


// const { postJoinUs } = require("../controllers/join_us.controller.js");
const { postJoinUs, getJoinUs } = require("../controllers/join_us.controller")

router.route('/').post(postJoinUs);
router.route('/').get(getJoinUs);


module.exports = router;