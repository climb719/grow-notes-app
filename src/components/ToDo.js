import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { ToDoForm } from '.';


function ToDo({toDoArray, completeToDo, deleteToDo, editToDo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
      })

      const submitEdit = value => {
        editToDo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        })
      }
      if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitEdit} />;
      }


    

    return toDoArray.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-complete' : 'todo'} key={index} >
          <div key={todo.id} onClick={() => completeToDo("comlete click")}>
            {todo.text}
          </div>
          <div className='todo-icons'>
          <AiOutlineDelete
             onClick={() => deleteToDo(todo.id)}
            className='delete-icon'
          />
          <FiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text }, console.log(todo))}
        
            className='edit-icon'
          />
        </div>
      </div>
    ))
    
}

export default ToDo
