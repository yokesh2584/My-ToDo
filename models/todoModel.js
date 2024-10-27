const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema, 'To-Do');

module.exports = Todo;