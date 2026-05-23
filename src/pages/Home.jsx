function Home() {

  return (

    <div className="bg-[#021b12] text-white min-h-screen overflow-hidden">

      {/* Hero Section */}

      <div className="relative min-h-screen pt-28 flex items-center px-10 md:px-20">

        {/* Background Overlay */}

        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Background Image */}

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Farmland"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero Content */}

        <div className="relative z-10 max-w-4xl">

          <p className="text-[#f5d06f] tracking-[6px] text-lg mb-6 font-semibold">

            MR FARMLAND ADVISORIES

          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">

            Invest Today <br />

            Secure Tomorrow

          </h1>

          <p className="text-gray-300 text-lg leading-9 max-w-2xl mb-10">

            Premium farmland and real estate investment opportunities
            designed for long-term growth, wealth creation, and secure futures.

          </p>

          <button className="bg-[#d4a24c] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">

            Explore Properties

          </button>

        </div>

      </div>

      {/* Features Section */}

      <div className="relative z-20 -mt-10 px-6 md:px-20 pb-20">

        <div className="grid md:grid-cols-4 gap-8 bg-[#0b2b20] border border-[#d4a24c]/20 rounded-[35px] p-10 shadow-2xl">

          <div>

            <h2 className="text-[#d4a24c] text-2xl mb-4">

              Premium Farmlands

            </h2>

            <p className="text-gray-300 leading-8">

              Carefully selected high potential agricultural and investment lands.

            </p>

          </div>

          <div>

            <h2 className="text-[#d4a24c] text-2xl mb-4">

              Expert Guidance

            </h2>

            <p className="text-gray-300 leading-8">

              End-to-end support from property selection to documentation.

            </p>

          </div>

          <div>

            <h2 className="text-[#d4a24c] text-2xl mb-4">

              Safe Investment

            </h2>

            <p className="text-gray-300 leading-8">

              Transparent deals with legal clarity and investment security.

            </p>

          </div>

          <div>

            <h2 className="text-[#d4a24c] text-2xl mb-4">

              Wealth Creation

            </h2>

            <p className="text-gray-300 leading-8">

              Build long-term wealth with appreciating land assets.

            </p>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Home