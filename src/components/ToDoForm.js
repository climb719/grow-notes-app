import React, {useState} from 'react';

function ToDoForm() {

    const [toDo, setToD] = useState('')

  return (
    <form className='todo-form'>
    <input 
    type='text'
    placeholder='Add a todo item here...'
    name='text'
    className='todo-text'/>
    <button className='todo-button'>Add Todo</button>
    </form>
  )
 
}

export default ToDoForm;
