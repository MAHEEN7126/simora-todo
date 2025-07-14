import React, { useEffect, useState } from 'react'

function CalenderReminder({ date }) {
  const [reminder, setReminder] = useState('')
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('reminders')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  function add() {
    if (reminder.trim() === '') {
      return
    }

    const newRem = {
      id: Date.now(),
      text: reminder,
      date: date,
    }

    setReminders([...reminders, newRem])
    setReminder('')
  }

  function DeleteRem(idToDelete) {
    const updated = reminders.filter((rem) => rem.id !== idToDelete)
    setReminders(updated)
  }

  return (
    <div>
      <div>
        <input
          className=" p-4 w-full py-3 rounded-3xl shadow-inner border border-purple-500   focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring focus-semibold bg-white bg-opacity-60 transition duration-300 ease-in-out "
          placeholder="Enter missions 🎯"
          type="text"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </div>
      <button
        className="mx-2 mt-3 px-4 py-2 font-normal rounded-3xl bg-gradient-to-r from-[#b8d0ff] hover:bg-gradient-to-br from-[#b8d0ff]"
        onClick={add}
      >
        ADD
      </button>

      <ul className="w-full max-w-md bg-pink shadow-md rounded-xl p-4 flex flex-col gap-4">
        {reminders.map((rem) => (
          <li
            key={rem.id}
            className="break-words w-full font-normal text-grau-700"
          >
            {rem.text} on{' '}
            <span className="font-normal px-1 text-orange-600">
              {rem.date?.toDateString?.()}
            </span>
            <button
              onClick={() => DeleteRem(rem.id)}
              className="bg-gradient-to-r from-[#eccaffdd] mx-1 px-5 font-normal hover:bg-gradient-to-br from-[#eccaffdd] px-3 py-2 rounded-3xl"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CalenderReminder
