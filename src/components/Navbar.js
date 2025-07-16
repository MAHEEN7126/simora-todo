import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=" relative bg-gradient-to-r from-[#e4a5ffaa] via-[#deabff66] to-[#b8d0ffdd] backdrop-blur-md shadow-md border-b border-white/20 px-3 py-6 ">
      <div className="max-w-7xl mx-auto  relative flex  items-center ">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 ">
          <Link
            to="/"
            className="text-[#a06ec4] font-semibold text-lg hover:text-[#b892ff] transition"
          >
            {' '}
            Home
          </Link>

          <Link
            to="/calender"
            className="text-[#a06ec4] font-semibold text-lg hover:text-[#b892ff] transition"
          >
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
