// import Todo Model
const Todo = require("../models/todoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};


// createNewTodo function - To create new todo
exports.createNewTodo = (req, res) => {
    console.log(req.body)
    let newTodo = new Todo(req.body);
    newTodo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};

// updateTodo function - To update todo status by id
exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate({ text: req.params.text }, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

// deleteTodo function - To delete todo by id

exports.deleteTodo = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id }).then(function () {
        res.status(200).send("data deleted");
    }).catch(function (error) {
        res.status(500).send("data not deleted error: " + error);
        // Failure
    })
};
