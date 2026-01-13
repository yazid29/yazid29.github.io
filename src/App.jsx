import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Experience from './components/Experience.jsx'
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
          </main>
      </div>
    </>
  )
}

export default App
