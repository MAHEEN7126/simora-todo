import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function MyCalendar({ date, setDate }) {
  return (
    <div>
      <div>
        <Calendar
          className="rounded-3xl p-4 shadow-md bg-white text-gray-800"
          onChange={setDate}
          value={date}
        />
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        selected Date: <span>{date.toDateString()}</span>{' '}
      </p>
    </div>
  )
}

export default MyCalendar
