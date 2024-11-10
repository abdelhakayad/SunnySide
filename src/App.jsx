import React from 'react'
import { About, Footer, Header, Navbar, Projects, Services, Testimonials } from './components/components'
import './index.css'

function App() {
  return (
    <>
      <header className="lg:bg-hero sm:bg-heroMob xs:bg-heroMob bg-scroll bg-cover bg-center h-screen text-white ">
        <Navbar />
        <Header />
      </header>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <Footer />
    </>
  );
}

export default App;
