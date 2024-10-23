import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Dogs } from './pages/dogs'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Dogs/>}></Route>
    </Routes>
  )
}

export default App
