import React, { useEffect, useState } from 'react'
import Taskcard from '../components/Taskcard'

function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    if (task.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      text: task,
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  function deleteTask(taskToDelete) {
    const updated = tasks.filter((T) => T.id !== taskToDelete)
    setTasks(updated)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eccaff] via-[#deabff66] to-[#b8d0ff] flex justify-center items-start p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="w-full max-w-md bg-gradient-to-br from-[#eccaff] via-[#f8d7ff] to-[#ffdfff] flex justify-center items-start p-3">
          <input
            className="w-full p-4  border-purple-500 rounded-3xl shadow-inner focus:outline-none focus:ring focus:ring-purple-200 focus:ring-opacity-60 focus:text-black-200 focus:font-italic-200"
            placeholder=" Enter little mission 🌟"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <button
          className="bg-gradient-to-r from-[	#b279dd]  font-semibold text-md:bold hover:bg-gradient-to-b from-[	#b279dd] px-3 py-1 rounded-3xl "
          onClick={addTask}
        >
          Add
        </button>

        <div className="flex flex-col items-center gap-4 w-full  ">
          {tasks.map((T) => (
            <Taskcard key={T.id} task={T} onDelete={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
