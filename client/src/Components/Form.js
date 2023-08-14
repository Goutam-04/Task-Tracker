import React, { useEffect, useState } from 'react';
import ToDo from './ToDo.js';

import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/HandleApi.js";
import '../App.css';

const Form = () => {
    const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App mt-28 mb-12">

    <div className="container">

      <h1 >Stay On Track: Plan & Achieve</h1>

      <div className="top">
        <input
          type="text"
          placeholder="Add a new Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className="add"
          onClick={isUpdating ?
            () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
            : () => addToDo(text, setText, setToDo)}>
          {isUpdating ? "Update" : "Add"}
        </div>

      </div>

      <div className="list">

        {toDo.map((item) => <ToDo 
        key={item._id} 
        text={item.text}
        updateMode = {() => updateMode(item._id, item.text)}
        deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

      </div>

    </div>

  </div>
  );
};

export default Form;
