import React from 'react'

function Taskcard({ task, onDelete }) {
  return (
    <div className="bg-white  flex px-3 py-2 rounded-2xl shadow-md border border-blue-300 p-4 m-4">
      <span className="break-words w-full font-normal text-grey-800 text-md font-normal ">
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className=" p-1 px-3 py-1 shadow-md mx-2 rounded-2xl font-noraml bg-gradient-to-tr from-[#b8d0ff] hover:bg-gradient-to-br from-[#b8d0ff] "
      >
        Delete
      </button>
    </div>
  )
}
export default Taskcard
