import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Calendar from './pages/Calender';
import About from './pages/About';

function App() {
  return (
    <Router>
      <dive>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ quotes" element={<Quotes />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </dive>
    </Router>
  )
}

export default App;
