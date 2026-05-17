import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Properties from "./pages/Properties"
import InvestmentGuide from "./pages/InvestmentGuide"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/investment-guide" element={<InvestmentGuide />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

      <WhatsAppButton />

    </>

  )
}

export default App