const express = require('express');
const router = express.Router();

const { postContact, getContact } = require("../controllers/contact.controller.js")

router.route('/').post(postContact);
router.route('/').get(getContact);







module.exports = router;