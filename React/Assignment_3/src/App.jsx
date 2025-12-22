import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Stats from './components/Stats'
import About from './components/About'
import AdvantagesSection from './components/AdvantagesSection'
import ValuesSection from './components/ValuesSection'

const App = () => {
  return (
    <div className="min-h-screen bg-[#060503] text-white">
      <Navbar />
      <Hero />
      <Cards />
      <Stats />
      <About />
      <AdvantagesSection />
      <ValuesSection />
    </div>
    
  )
}

export default App