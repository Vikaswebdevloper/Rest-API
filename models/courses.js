const mongoose = require('mongoose');
const courses = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    videos: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true // Set a default value here
    }
});
module.exports = mongoose.model("Courses", courses);
