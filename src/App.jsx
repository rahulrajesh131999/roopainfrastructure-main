import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
import Error from './components/common/Error'


function App() {

  return (
    <div className='w-screen min-h-screen flex flex-col bg-black text-white font-inter '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/p' element={<Test/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
