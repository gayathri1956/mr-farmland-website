import farm from "../assets/farm.jpg"

function Home() {

  return (

    <>

      {/* HERO SECTION */}
      <section
        className="relative min-h-[120vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.35)
            ),
            url(${farm})
          `
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021b12]/95 via-[#021b12]/65 to-transparent">

          {/* Main Content */}
          <div className="max-w-7xl mx-auto min-h-[120vh] flex items-center px-12 pt-40">

            {/* Left Content */}
            <div className="max-w-2xl text-white">

              <p className="text-[#d4a24c] tracking-[5px] mb-6 text-lg">

                PREMIUM FARMLAND INVESTMENTS

              </p>

              <h1 className="text-6xl leading-[0.95] font-semibold mb-8">

                INVEST IN EARTH,
                <br />
                GROW YOUR WORTH.

              </h1>

              <div className="w-36 h-0.5 bg-[#d4a24c] mb-8"></div>

              <p className="text-xl leading-10 text-gray-200 mb-12">

                MR Farmland Advisories helps you discover premium
                agricultural and investment lands with trusted guidance,
                clear documentation and high long-term returns.

              </p>

              {/* Buttons */}
              <div className="flex gap-6">

                <button className="bg-[#c89b3c] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#d4a24c] transition">

                  Explore Premium Lands

                </button>

                <button className="border border-[#d4a24c] text-white px-10 py-4 rounded-full text-lg hover:bg-[#d4a24c] hover:text-black transition">

                  Watch Video

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Right Floating Card */}
        <div className="absolute right-16 top-[45%] -translate-y-1/2">

          <div className="bg-[#021b12]/55 backdrop-blur-md border border-[#c89b3c]/40 rounded-[35px] p-10 w-[330px] text-white shadow-2xl">

            {/* Item 1 */}
            <div className="border-b border-[#c89b3c]/30 pb-8 mb-8">

              <h3 className="text-3xl text-[#d4a24c] mb-4">

                Trusted Advisory

              </h3>

              <p className="text-gray-300 leading-9">

                Verified investment opportunities with complete transparency.

              </p>

            </div>

            {/* Item 2 */}
            <div className="border-b border-[#c89b3c]/30 pb-8 mb-8">

              <h3 className="text-3xl text-[#d4a24c] mb-4">

                Clear Documentation

              </h3>

              <p className="text-gray-300 leading-9">

                Legally verified properties with secure investment guidance.

              </p>

            </div>

            {/* Item 3 */}
            <div>

              <h3 className="text-3xl text-[#d4a24c] mb-4">

                High Returns

              </h3>

              <p className="text-gray-300 leading-9">

                Strategically selected properties with future appreciation.

              </p>

            </div>

          </div>

        </div>

        {/* Bottom Feature Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#021b12]/95 border-t border-[#c89b3c]/20">

          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-12 py-10 text-white">

            {/* Item 1 */}
            <div className="border-r border-[#c89b3c]/20 pr-8">

              <h3 className="text-[#d4a24c] text-2xl mb-3">

                Premium Farmlands

              </h3>

              <p className="text-gray-300 leading-8">

                Carefully selected high potential agricultural and investment lands.

              </p>

            </div>

            {/* Item 2 */}
            <div className="border-r border-[#c89b3c]/20 pr-8">

              <h3 className="text-[#d4a24c] text-2xl mb-3">

                Expert Guidance

              </h3>

              <p className="text-gray-300 leading-8">

                End-to-end support from property selection to documentation.

              </p>

            </div>

            {/* Item 3 */}
            <div className="border-r border-[#c89b3c]/20 pr-8">

              <h3 className="text-[#d4a24c] text-2xl mb-3">

                Safe Investment

              </h3>

              <p className="text-gray-300 leading-8">

                Transparent deals with legal clarity and investment security.

              </p>

            </div>

            {/* Item 4 */}
            <div>

              <h3 className="text-[#d4a24c] text-2xl mb-3">

                Wealth Creation

              </h3>

              <p className="text-gray-300 leading-8">

                Build long-term wealth with appreciating land assets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#021b12] py-28 px-12">

        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            <p className="text-[#d4a24c] tracking-[5px] text-lg mb-6">

              ABOUT MR FARMLAND ADVISORIES

            </p>

            <h2 className="text-6xl text-white leading-tight mb-8">

              Building Wealth Through
              <br />
              Smart Land Investments

            </h2>

            <div className="w-32 h-0.5 bg-[#d4a24c] mb-8"></div>

            <p className="text-gray-300 text-lg leading-10 mb-8">

              MR Farmland Advisories specializes in premium farmland,
              open plots, gated communities, and future growth investment
              opportunities designed for long-term wealth creation.

            </p>

            <p className="text-gray-400 leading-9">

              We help investors and families make secure real estate
              decisions through trusted advisory services, verified
              documentation, and strategically selected properties
              with high appreciation potential.

            </p>

          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-8">

            <div className="bg-[#0b2b20] border border-[#c89b3c]/20 rounded-3xl p-8">

              <h3 className="text-[#d4a24c] text-3xl mb-5">

                Our Vision

              </h3>

              <p className="text-gray-300 leading-8">

                To become one of the most trusted real estate and farmland advisory brands.

              </p>

            </div>

            <div className="bg-[#0b2b20] border border-[#c89b3c]/20 rounded-3xl p-8">

              <h3 className="text-[#d4a24c] text-3xl mb-5">

                Our Mission

              </h3>

              <p className="text-gray-300 leading-8">

                Helping customers build wealth through secure land investments.

              </p>

            </div>

            <div className="bg-[#0b2b20] border border-[#c89b3c]/20 rounded-3xl p-8">

              <h3 className="text-[#d4a24c] text-3xl mb-5">

                Verified Properties

              </h3>

              <p className="text-gray-300 leading-8">

                Legally verified projects with transparent documentation.

              </p>

            </div>

            <div className="bg-[#0b2b20] border border-[#c89b3c]/20 rounded-3xl p-8">

              <h3 className="text-[#d4a24c] text-3xl mb-5">

                Investor Support

              </h3>

              <p className="text-gray-300 leading-8">

                End-to-end guidance from property selection to investment planning.

              </p>

            </div>

          </div>

        </div>

      </section>

    </>

  )
}

export default Home