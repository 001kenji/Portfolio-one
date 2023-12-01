import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './JS/header'
import About from './JS/about'
import Services from './JS/services'
import Reviews from './JS/reviews'
import Contact from './JS/contact'
import Footer from './JS/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <About />
    </div>
    <div>
    <Services />
    </div>
    <div>
      <Reviews />
    </div>
    <div>
      <Contact />
    </div>
    <div>
    <Footer />
    </div>
    </>
  )
}

export default App
