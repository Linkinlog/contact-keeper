const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route GET api/contacts
// @desc Get all contacts
// @access Private
router.get("/", auth, async (req, res) => {
	try {
		const allContacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(allContacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post("/",[
    check('name', 'Please enter a valid name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], (req, res) => {
	res.send("Apple jacks contacts");
});

// @route PUT api/contacts/:id
// @desc Update Contact
// @access Private
router.put("/:id", auth, (req, res) => {
	res.send("Apple jacks contacts - put");
});

// @route DELETE api/contacts/:id
// @desc Delete Contact
// @access Private
router.delete("/:id", (req, res) => {
	res.send("Apple jacks contacts - delete");
});

module.exports = router;