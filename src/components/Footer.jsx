import logo from "../assets/logo.jpeg"

function Footer() {

  return (

    <footer className="bg-[#021b12] text-white py-12 px-6 border-t border-[#d4a24c]/20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left */}

        <div className="flex flex-col items-center md:items-start">

          <img
            src={logo}
            alt="MR Farmland Advisories"
            className="h-20 object-contain rounded-lg mb-4"
          />

        </div>

        {/* Right */}

        <div className="text-center md:text-right">

          <h2 className="text-[#f5d06f] text-3xl font-semibold mb-3">

            MR FARMLAND ADVISORIES

          </h2>

          <p className="text-gray-300 mb-2">

            Your Trusted Farmland Investment Partner.

          </p>

          <p className="text-gray-400 max-w-xl">

            Premium farmland investments, open plots,
            and secure real estate opportunities.

          </p>

          <p className="text-gray-500 mt-5 text-sm">

            © 2026 MR Farmland Advisories. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer