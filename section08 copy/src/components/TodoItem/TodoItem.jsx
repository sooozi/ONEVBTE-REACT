import React from 'react'
import './TodoItem.css';

const TodoItem = () => {
  return (
      <div className='TodoItem'>
          <input type="checkbox" />
          <div className='content'>Todo...</div>
          <div className='date'>date</div>
          <button>삭제</button>
    </div>
  )
}

export default TodoItem