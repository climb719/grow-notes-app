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

  const deleteToDo = id => {
      const arrayAfterDelete = [...toDoArray].filter(todo => todo.id !== id)
      setToDoArray(arrayAfterDelete)
  }

  const editToDo = (id, newToDo) => {
      console.log(newToDo)
      console.log(id)
    // if (newToDo.text || /^\s*$/.test(newToDo.text)) {
    //     return
    //   }
    //     setToDoArray(prev => prev.map(todo => (todo.id ===id ? newToDo: todo)))
  }


  return (
      <div>
  
      <ToDoForm onSubmit={addToDoItem} />
      <ToDo toDoArray={toDoArray} deleteToDo={deleteToDo} editToDo={editToDo}/>
  
      </div>
  )
}

export default ToDoList;
