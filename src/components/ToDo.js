import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';


function ToDo({toDoArray}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });

    return toDoArray.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-complete' : 'todo'} key={index} >
          <div key={todo.id} onClick={() => console.log("comlete click")}>
            {todo.text}
          </div>
          <div className='todo-icons'>
          <AiOutlineDelete
             onClick={() => console.log(`{todo.id}`)}
            className='delete-icon'
          />
          <FiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>
      </div>
    ))
    
}

export default ToDo
