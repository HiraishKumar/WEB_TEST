const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxlength: [20, "Name can not be longer than 20 letters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
}); 

module.exports = mongoose.model('Task', TaskSchema); 