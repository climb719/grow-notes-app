import React, {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';

function ToDoForm(props) {

    const [toDo, setToDo] = useState('')

    const handleChange = (e) => {
      setToDo(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      props.onSubmit({
        id: uuidv1(),
        text: toDo
      })
     setToDo('')

     
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='Add a todo item here...'
    value={toDo}
    onChange={handleChange}
    name='text'
    className='todo-text'
    />&nbsp;

    <button className='todo-button' onClick={handleSubmit}>Add Todo</button>
    </form>
  )
 
}

export default ToDoForm;
