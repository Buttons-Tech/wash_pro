import React, { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Wash my car", "cut my hair", "make dinner"]);
    const [newTask, setNewTask] = useState("")

    const handleTaskChange = (event)=>{
setNewTask(event.target.value)
    }

    const addTask = (e)=>{
setTasks(t=> [...t, newTask ]);
setNewTask("")
    }
    const deleteTask =(index)=>{
      setTasks(tasks.filter((_, i)=> i !== index))  
    }
  return (

    
    <div >
        <h1>ToDoList </h1>
        <ul>
 {tasks.map((task, index)=> 
        <li key={index}>{task} <button onClick={()=>deleteTask(index)}>delete</button></li>
        )}
        </ul>
        
        <div>

        <input type="text"
        placeholder='Enter Task...'
        value={newTask}
        onChange={(e)=>handleTaskChange(event)}
        />
        <button onClick={addTask}>Add Task</button>

       {newTask}
        </div>
    </div>
  )
}

export default ToDoList