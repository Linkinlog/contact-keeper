const express = require('express')
const router = express.Router();


// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Apple jacks contacts')
})

// @route PUT api/contacts/:id
// @desc Update Contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Apple jacks contacts - put')
})

// @route DELETE api/contacts/:id
// @desc Delete Contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Apple jacks contacts - delete')
})


module.exports = router;