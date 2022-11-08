import './App.css'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Endorsements from './components/Endorsements/Endorsements'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
  
    <Portfolio />
    <Endorsements />
    <Contact />
    <Footer />
    </>
  )
}

export default App
