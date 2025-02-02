import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complete, completeTask, deleteTask }) {
  return (
    <div className={complete ? "task complete" : "task"}>
      <p onClick={() => completeTask(id)}>
        {text}
      </p>
      <div onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  )
}

export default Task