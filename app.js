
const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());

const port = process.env.PORT || 3000;

const todos = [
    {
        id : 1,
        todo : "exercise",
        time : "5:00am-6:00am"
    },
    {
        id : 2,
        todo : " take shower",
        time : "6:00am-6:30am"
    },
    {
        id : 3,
        todo : "preparing and taking breakfast",
        time : "6:30am-7:30am"
    },
    {
        id : 4,
        todo : "heading to class or other places",
        time : "7:30-8:30"
    },
    {
        id : 5,
        todo : " day to day activities",
        time : "8:30am-5:00pm",
    },
    {
        id: 6,
        todo : "leisure activities",
        time : "5:00pm-10:00pm"
    },
    {
        id : 7,
        todo : "sleeping",
        time : "10:00pm-4:00am"
    }
]

app.get('/todos', (req,res) =>{
res.status(204).send(todos);
});
app.get('/', (req,res) => {
    res.send("my todos");
});
app.get('/todos/:id', (req,res) => {
    const todo = todos.find(tod => tod.id ===parseInt(req.params.id));
    if(!todo){
        res.status(404).send("the todo with the given id doesn't exist")
    }
    res.status(204).send(todo);
})
app.post('/todos', (req,res) => {

    const {error} = validateTodo(req.body);
    if(error){
        res.status(404).send(result.error.details[0].message);
        return;
    }
    const todo = {
        id : todos.length +1,
        todo : req.body.todo,
        time : req.body.time
    };
    todos.push(todo);
    res.send(todo);
});
app.put('/todos/:id', (req,res) => {
const todo = todos.find(tod =>tod.id === parseInt(req.params.id));
if(!todo){
    res.status(404).send("sorry! Activity with the given ID not found!")
}
    const {error} = validateTodo(req.body);
    if(error){
        res.status(404).send(result.error.details[0].message);
        return;
    }
        // noinspection CommaExpressionJS
    todo.todo = req.body.todo,
        todo.time = req.body.time
    res.send(todo);
});
const validateTodo = (todo) => {
    const schema = {
        todo : Joi.string().min(7).max(30).required(),
        time : Joi.string().min(6).max(15).required()
    };
    return Joi.validate(todo,schema);
}
app.delete('/todos/:id', (req,res) => {

});
app.listen(port, () =>  console.log(`listening on port ${port} ...`));