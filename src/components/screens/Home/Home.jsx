import React from 'react'
import { useState } from 'react'
import ToDoItem from './Item/ToDoItem.jsx'
import CreateTodoField from './Create-todo-field/CreateTodoField.jsx'


const data = [
    {
        _id: '1',
        title: 'Finish shopping',
        isCompleted: false,
    },
    {
        _id: '2',
        title: 'Read the last chapter',
        isCompleted: true,
    },
    {
        _id: '3',
        title: 'Meet friend on railway',
        isCompleted: true,
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id));
    }

    

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bolt text-center mb-8">Todo</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos.map(todo =>
                <ToDoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>)}
                
        </div>
    )
}

export default Home;
