import React from 'react'
import { MdDelete } from "react-icons/md";

const TodoList = ({ todoTitle, todoDate, handleDeleteItem }) => {
  console.log("TodoList repaint");
  return (
    <>
      <div className='py-3 w-50'>
        <div className="row kg-row">
          <div className="col-6">
            {todoTitle}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button onClick={() => handleDeleteItem(todoTitle)} type="button" className="btn btn-danger kg-button"><MdDelete /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList
