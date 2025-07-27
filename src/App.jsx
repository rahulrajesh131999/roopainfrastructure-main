
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './components/common/Error'
import SEO from './components/SEO'


function App() {

  return (
    <div className='w-screen min-h-screen flex flex-col bg-black text-white font-inter '>
      <SEO title='Roopa Infrastructures' description='Welcome to Roopa Infrastructures, building the future. '/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
