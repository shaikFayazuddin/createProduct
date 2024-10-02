
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
