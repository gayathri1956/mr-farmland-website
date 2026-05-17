import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="bg-[#021b12] text-white px-8 py-5 border-b border-[#c89b3c]/20 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#d4a24c]">

          MR Farmland

        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">

          <li>
            <Link to="/" className="hover:text-[#d4a24c] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-[#d4a24c] transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-[#d4a24c] transition">
              Services
            </Link>
          </li>

          <li>
            <Link to="/properties" className="hover:text-[#d4a24c] transition">
              Properties
            </Link>
          </li>

          <li>
            <Link to="/investment-guide" className="hover:text-[#d4a24c] transition">
              Investment Guide
            </Link>
          </li>

          <li>
            <Link to="/reviews" className="hover:text-[#d4a24c] transition">
              Reviews
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-[#d4a24c] transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          ☰

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden mt-6 bg-[#0b2b20] rounded-2xl p-6">

          <ul className="flex flex-col gap-6 text-lg">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/properties" onClick={() => setMenuOpen(false)}>
                Properties
              </Link>
            </li>

            <li>
              <Link to="/investment-guide" onClick={() => setMenuOpen(false)}>
                Investment Guide
              </Link>
            </li>

            <li>
              <Link to="/reviews" onClick={() => setMenuOpen(false)}>
                Reviews
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>

        </div>

      )}

    </nav>

  )
}

export default Navbar