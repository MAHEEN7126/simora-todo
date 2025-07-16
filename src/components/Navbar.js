import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=" relative bg-gradient-to-r from-[#e4a5ffaa] via-[#deabff66] to-[#b8d0ffdd] backdrop-blur-md shadow-md border-b border-white/20 px-4 py-4">
      <div className="max-w-7xl mx-auto  relative flex  items-center space-x-2">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black "> 🌟 Simora Todo</p>
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
