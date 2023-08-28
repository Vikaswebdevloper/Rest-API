const express = require('express');
const router = express.Router();
const Course = require('../models/courses');

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const c = await Course.findById(id);
        res.json(c);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the course' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the course' });
    }
});

module.exports = router;
