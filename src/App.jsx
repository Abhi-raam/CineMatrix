import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import SearchPage from './Pages/SearchPage'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:type/:id' element={<MovieDetails/>} />
          <Route path='/search/:query' element={<SearchPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App