import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

