import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <div>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skill />
            <Experience />
            <Project />
            <Contact/>
            <Footer/>
          </main>
      </div>
    </>
  )
}

export default App
