import React, {useState} from 'react';
import { ToDoForm } from '.'

function ToDoList() {

  const [toDos, setToDos] = useState([])


  return (
      <div>
  
      <ToDoForm />
      </div>
  )
}

export default ToDoList;
