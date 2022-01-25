import React, {useState, useEffect, useRef} from 'react';
import { v1 as uuidv1 } from 'uuid';

function ToDoForm(props) {

    const [toDo, setToDo] = useState(props.edit ? props.edit.value : '')
    // const [editMode, setEditMode] = useState(false)
    const importFocus = useRef(null)

    useEffect(() => {
      importFocus.current.focus()
    })

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
   <>
    {props.edit ? ( 
      <form className='todo-form' onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='Add a todo item here...'
      value={toDo}
      onChange={handleChange}
      ref={importFocus}
      name='text'
      className='todo-input'/>
      <button className='todo-button' onClick={handleSubmit}>UPDATE TODO</button>
      </form> 
     ) : (
       <form className={props.edit ? 'hidden-form' : 'todo-form'} onSubmit={handleSubmit}>  
       <input 
      type='text'
      placeholder='Add a todo item here...'
      value={toDo}
      onChange={handleChange}
      ref={importFocus}
      name='text'
      className='todo-input' 
      />
      <button className='todo-button'  onClick={handleSubmit}>ADD TODO</button>
      </form>
      )}
     </>
  )
 
}

export default ToDoForm;
