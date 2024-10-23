const Todo = require('../models/todoModel');

const todoController = {
    getAllTodo : async (req, res)=>{
        try{
            const todos = await Todo.find();
            res.json(todos);
        } catch(err){
            res.status(500).json({message: 'Error fetching todos'});
        }
    },

    createTodo : async (req, res)=> {
        try {
            const { title } = req.body;
            if(!title || title.trim() === ''){
                return res.status(400).json({message: 'Todo title is required'});
            }
            const todo = new Todo(req.body);
            await todo.save();
            res.json(todo);
        } catch(err){
            console.error('Error creating todo:', err);
            res.status(500).json({message: 'Error creating todo'});
        }
    }
}

module.exports = todoController;