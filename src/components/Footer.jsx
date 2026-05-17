function Footer() {

  return (

    <footer className="bg-black text-white pt-20 pb-10 px-10 border-t border-[#c89b3c]/20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <h2 className="text-3xl text-[#d4a24c] mb-6">

            MR Farmland

          </h2>

          <p className="text-gray-400 leading-8">

            Trusted real estate and farmland investment advisory
            helping investors build secure and future-focused assets.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl text-[#d4a24c] mb-6">

            Quick Links

          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Properties</li>
            <li>Investment Guide</li>
            <li>Contact</li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h2 className="text-2xl text-[#d4a24c] mb-6">

            Services

          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>Farmland Investments</li>
            <li>Open Plot Ventures</li>
            <li>Real Estate Advisory</li>
            <li>Documentation Support</li>
            <li>Investment Planning</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl text-[#d4a24c] mb-6">

            Contact

          </h2>

          <div className="space-y-4 text-gray-400">

            <p>+91 9959753136</p>

            <p>mr@mrfarmlandadvisories.co.in</p>

            <p>www.mrfarmlandadvisories.co.in</p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#c89b3c]/20 mt-16 pt-8 text-center text-gray-500">

        © 2026 MR Farmland Advisories. All Rights Reserved.

      </div>

    </footer>

  )
}

export default Footer