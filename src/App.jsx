import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './Pages/MovieDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:type/:id' element={<MovieDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App