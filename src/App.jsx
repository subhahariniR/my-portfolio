import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border)',
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.68rem',
        color: 'var(--muted)',
        letterSpacing: '0.08em',
      }}>
        © 2025 Shubhaharini R · Built with React · Tamil Nadu, India
      </footer>
    </div>
  )
}

export default App