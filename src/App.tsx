import React from 'react';
import './App.css';
import {ToodoList} from "./ToodoList";

function App() {
    const task1=[
        {id:1,title:'HTML&CSS',isDone:true},
        {id:2,title:'JS',isDone:false},
        {id:3,title:'React',isDone:true},
    ]

    const task2=[
        {id:1,title:'HTML&CSS222222',isDone:true},
        {id:2,title:'JS22222222222',isDone:false},
        {id:3,title:'React22222222',isDone:true},
    ]

    return (
        <div className="App">
            <ToodoList title={'What to learn'} task={task1} />
            <ToodoList title ={'What to 2222'} task={task2} />
        </div>
    );

}



export default App;
