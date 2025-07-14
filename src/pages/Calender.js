import MyCalendar from '../components/MyCalendar'
import CalenderReminder from '../components/CalenderReminder'
import { useState } from 'react'

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="relative bg-gradient-to-b from-[#eccaff] via-[#deabff66] to-[#b8d0ff] min-h-screen flex items-center justify-center px-1 bg-gray-100 px-9 py-9 ">
      <div className="fixed top-14 mt-9  px-3 py-3 shadow-lg rounded-3xl flex justify-center items-center">
        <MyCalendar date={selectedDate} setDate={setSelectedDate} />
      </div>
      <div className="absolute top-[450px] left-1/2 transform -translate-x-1/2 px-3">
        <CalenderReminder date={selectedDate} />
      </div>
    </div>
  )
}

export default Calendar
