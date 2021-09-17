const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route GET api/contacts
// @desc Get all contacts
// @access Private
router.get('/', auth, async (req, res) => {
	try {
		const allContacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(allContacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', [auth, [check('name', 'Please enter a valid name').not().isEmpty()]], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		contact = new Contact({ ...req.body, user: req.user.id });
		await contact.save();
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
	res.json(contact);
});

// @route PUT api/contacts/:id
// @desc Update Contact
// @access Private
router.put('/:id', [auth, [check('name', 'Please enter a valid name').not().isEmpty()]], async (req, res) => {
	const { id } = req.params;
	try {
		const contact = await Contact.findById(id);
		if (!contact) {
			return res.status(404).json({ msg: 'Contact not found' });
		}
		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}
		const newContact = await Contact.findByIdAndUpdate(id, { ...req.body }, { new: true });
		return res.json(newContact);
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
});

// @route DELETE api/contacts/:id
// @desc Delete Contact
// @access Private
router.delete('/:id', [auth, [check('name', 'Please enter a valid name').not().isEmpty()]], async (req, res) => {
	const { id } = req.params;
	try {
		Contact.findByIdAndRemove(id, (error) => {
			if (error) {
				console.error(error);
			}
			return res.json({ msg: 'Deleted' });
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send('Server error');
	}
});

module.exports = router;
