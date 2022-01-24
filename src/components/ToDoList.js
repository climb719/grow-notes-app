import React, {useState} from 'react';
import { ToDoForm, ToDo } from '.'

function ToDoList() {

  const [toDoArray, setToDoArray] = useState([])

  const addToDoItem = input => {
    if (!input.text || /^\s*$/.test(input.text)) {
        return
    }
    const newToDos = [input, ...toDoArray];
    setToDoArray(newToDos);
    console.log(...toDoArray);
  }  

  return (
      <div>
  
      <ToDoForm onSubmit={addToDoItem} />
      <ToDo toDoArray={toDoArray}/>
  
      </div>
  )
}

export default ToDoList;
