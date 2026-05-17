function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/919959753136?text=Hi%20MR%20Farmland%20Advisories,%20I%20am%20interested%20in%20your%20properties."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >

      <div className="relative flex items-center justify-center">

        {/* Pulse Animation */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl transition duration-300">

          🟢

        </div>

      </div>

    </a>

  )
}

export default WhatsAppButton