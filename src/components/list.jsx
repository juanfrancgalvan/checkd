import React from "react";
import { useState } from "react";
import Form from "./form";
import Task from "./task";

function TaskList() {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim()
      const updateTasks = [task, ...tasks]
      setTasks(updateTasks)
    }
  }

  const deleteTask = id => {
    const updateTasks = tasks.filter(task => task.id !== id)
    setTasks(updateTasks)
  }

  const completeTask = id => {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(updateTasks)
  }

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="list">
        {
          tasks.map((task) =>
            <Task key={task.id} id={task.id} text={task.text} complete={task.complete} completeTask={completeTask} deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  )
}

export default TaskList