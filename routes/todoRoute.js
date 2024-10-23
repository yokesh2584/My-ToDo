const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getAllTodo);
router.post('/todos',  todoController.createTodo);

module.exports = router;