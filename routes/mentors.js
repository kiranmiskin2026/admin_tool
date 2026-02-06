const express = require('express');
const router = express.Router();
const Mentors = require('../models/Mentor');
// GET /api/addresses
router.get('/', async (req, res) => {
    try {
        const addresses = await Mentors.find().populate('student');
        res.json(addresses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/addresses/:id
router.get('/:id', async (req, res) => {
    try {
        const address = await Mentors.findById(req.params.id).populate('student');
        if (!address) return res.status(404).json({ error: 'Address not found' });
        res.json(address);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;