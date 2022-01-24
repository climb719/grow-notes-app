import React, {useState} from 'react';
import { ToDoForm, ToDo } from '.'

function ToDoList() {

  const [toDoArray, setToDoArray] = useState([])

  const addToDoItem = input => {
      console.log(input)
   //debugger
    if (input.text === '') {
        alert("please add text")
    } else {
        const newToDos = [input, ...toDoArray];
        setToDoArray(newToDos);
        console.log(...toDoArray)   
    } 
  }  

  return (
      <div>
  
      <ToDoForm onSubmit={addToDoItem} />
      <ToDo toDoArray={toDoArray}/>
  
      </div>
  )
}

export default ToDoList;
