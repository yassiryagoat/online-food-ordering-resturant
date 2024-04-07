import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'


function App() {

  return (
    <div >
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>  
      </BrowserRouter>

    </div>
  )
}

export default App
