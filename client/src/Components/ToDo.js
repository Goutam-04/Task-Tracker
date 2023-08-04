import React from 'react'


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
            <EditIcon className='icon' onClick={updateMode}/>
            <DeleteIcon className='icon' onClick={deleteToDo}/>
            </div>
        </div>
    )
  }
  
  export default ToDo
          