import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Education from './components/sections/Education.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Services from './components/sections/Services.jsx'
import CertificatesHackathons from './components/sections/CertificatesHackathons.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  return (
    <>
      <div className='min-h-screen bg-black'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Services />
          <CertificatesHackathons />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
