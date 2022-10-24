import React from "react";
import Box from '@mui/material/Box';
import "./style.css";
import "./script.jsx";

const App = () => {
    return (
        <Box>
            <div className="container">
                <input type="text" placeholder="Enter task" id="task-input"/>
                    <button class="add-task">Add</button>
                    <ul class="list-group todo-list-ul"></ul>
            </div>
        </Box>

    );
};

export default App;