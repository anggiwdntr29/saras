import { About, Contact, Education, Experience, Footer, Header, Hero, Projects, Skills } from './components'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
