import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Count from './components/Count'
import ColorChangeButton from './components/ColorChangeButton'

function App() {

  return (
    <>
     <div>
        <Nav/>
        <Count/>
        <ColorChangeButton/>
     </div>
    </>
  )
}

export default App
