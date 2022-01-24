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

      e.target.reset()

    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='Add a todo item here...'
    name='text'
    className='todo-text'
    onChange={handleChange}/>
    <button className='todo-button'>Add Todo</button>
    </form>
  )
 
}

export default ToDoForm;
