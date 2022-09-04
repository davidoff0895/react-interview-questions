import React from 'react'
import '@/App.css'
import Counter from '@/components/counter'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </div>
  )
}

export default App
