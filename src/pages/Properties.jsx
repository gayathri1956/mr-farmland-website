import farm from "../assets/farm.jpg"

function Properties() {

  const properties = [
    {
      title: "Premium Farmland",
      location: "Future Growth Corridor",
      size: "5 - 20 Acres",
      price: "High Appreciation Potential"
    },
    {
      title: "Open Plot Venture",
      location: "DTCP Approved Layout",
      size: "200 - 500 Sq.Yards",
      price: "Secure Investment"
    },
    {
      title: "Agricultural Project",
      location: "Green Development Zone",
      size: "Investment Ready",
      price: "Long-Term Returns"
    },
    {
      title: "Red Sandalwood Project",
      location: "Premium Plantation Zone",
      size: "Future Wealth Asset",
      price: "High Value Growth"
    },
    {
      title: "Luxury Farm Estate",
      location: "Nature Investment Property",
      size: "Premium Development",
      price: "Elite Investment"
    },
    {
      title: "Future Growth Land",
      location: "Emerging Investment Area",
      size: "Verified Property",
      price: "Strong Appreciation"
    }
  ]

  return (

    <div className="bg-[#021b12] min-h-screen text-white py-24 px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-[#d4a24c] tracking-[6px] text-lg mb-5">

            OUR PROPERTIES

          </p>

          <h1 className="text-6xl font-semibold leading-tight mb-6">

            Premium Investment
            <br />
            Opportunities

          </h1>

          <div className="w-32 h-0.5 bg-[#d4a24c] mx-auto"></div>

        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {properties.map((property, index) => (

            <div
              key={index}
              className="bg-[#0b2b20] rounded-[35px] overflow-hidden border border-[#c89b3c]/20 hover:scale-105 transition duration-300"
            >

              {/* Image */}
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${farm})`
                }}
              ></div>

              {/* Content */}
              <div className="p-8">

                <h2 className="text-3xl text-[#d4a24c] mb-4">

                  {property.title}

                </h2>

                <div className="space-y-4 text-gray-300">

                  <p>
                    <span className="text-white font-medium">
                      Location:
                    </span>{" "}
                    {property.location}
                  </p>

                  <p>
                    <span className="text-white font-medium">
                      Size:
                    </span>{" "}
                    {property.size}
                  </p>

                  <p>
                    <span className="text-white font-medium">
                      Value:
                    </span>{" "}
                    {property.price}
                  </p>

                </div>

                <button className="mt-8 bg-[#c89b3c] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#d4a24c] transition">

                  View Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Properties