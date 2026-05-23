import { Link } from "react-router-dom"
import logo from "../assets/logo.jpeg"

function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#021b12]/95 backdrop-blur-md border-b border-[#d4a24c]/20">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center">

          <img
            src={logo}
            alt="MR Farmland Advisories"
            className="h-12 md:h-14 object-contain rounded-lg"
          />

        </div>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link to="/" className="hover:text-[#f5d06f] transition">

            Home

          </Link>

          <Link to="/about" className="hover:text-[#f5d06f] transition">

            About

          </Link>

          <Link to="/services" className="hover:text-[#f5d06f] transition">

            Services

          </Link>

          <Link to="/properties" className="hover:text-[#f5d06f] transition">

            Properties

          </Link>

          <Link to="/investment-guide" className="hover:text-[#f5d06f] transition">

            Investment Guide

          </Link>

          <Link to="/contact" className="hover:text-[#f5d06f] transition">

            Contact

          </Link>

        </div>

        {/* Call Button */}

        <a
          href="tel:+919959753136"
          className="bg-[#d4a24c] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >

          Call Now

        </a>

      </div>

    </nav>

  )
}

export default Navbar