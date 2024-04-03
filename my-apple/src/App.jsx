import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Features from './components/Features'
import Processor from './components/Processor'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlight />
    <Model />
    <Features />
    <Processor />
   </main>
  )
}

export default App
