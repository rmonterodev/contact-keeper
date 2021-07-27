const express = require('express');
const router = express.Router();


// @route       GET api/contacts
// @desc        Get all users contacts
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route       POST api/contacts
// @desc        Add new contact
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route       PUT api/contacts
// @desc        Update contact
router.post('/:id', (req, res) => {
    res.send('Update contact');
});

// @route       DELETE api/contacts
// @desc        Update contact
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;