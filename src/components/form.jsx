import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [input, setInput] = useState('')

  const handlingChange = e => {
    setInput(e.target.value)
  }

  const handleShipping = e => {
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    props.onSubmit(newTask)
  }

  return (
    <form className="form" onSubmit={handleShipping}>
      <input className="input" type="text" placeholder="Write a task" name="text" onChange={handlingChange} />
      <button className="button">Add</button>
    </form>
  )
}

export default Form