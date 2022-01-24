import React, {useState} from 'react';
import { ToDoForm } from '.'

function ToDoList() {

  const [toDos, setToDos] = useState([])

  const addToDoItem = input => {
    if (!input.text || /^\s*$/.test(input.text)) {
        return
    }
    const newToDos = [input, ...toDos];
    setToDos(newToDos);
    console.log(...toDos);
  }  

  return (
      <div>
  
      <ToDoForm onSubmit={addToDoItem} />
      </div>
  )
}

export default ToDoList;
