import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Project from './components/Project'
import GetStarted from './components/GetStarted'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Project />
      <GetStarted />
    </div>
  )
}

export default App