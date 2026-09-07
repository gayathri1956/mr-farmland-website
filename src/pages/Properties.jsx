import { useState } from "react"
import farm from "../assets/farm.jpg"

function Properties() {
  const [selectedProperty, setSelectedProperty] = useState(null)

  const properties = [
    {
      title: "Premium Farmland",
      teluguTitle: "ప్రీమియం వ్యవసాయ భూమి",
      location: "Future Growth Corridor",
      teluguLocation: "భవిష్యత్ అభివృద్ధి ప్రాంతం",
      size: "5 - 20 Acres",
      teluguSize: "5 - 20 ఎకరాలు",
      price: "High Appreciation Potential",
      teluguPrice: "అధిక విలువ పెరుగుదల అవకాశం",
      description:
        "Premium farmland selected for investors looking for long-term land appreciation, agricultural opportunities, and secure asset creation.",
      teluguDescription:
        "దీర్ఘకాలిక భూమి విలువ పెరుగుదల, వ్యవసాయ అవకాశాలు మరియు సురక్షితమైన ఆస్తి నిర్మాణం కోరుకునే పెట్టుబడిదారుల కోసం ఎంపిక చేసిన ప్రీమియం వ్యవసాయ భూమి.",
      image: farm,
    },

    {
  title: "Open Plot Venture",
  teluguTitle: "ఓపెన్ ప్లాట్ వెంచర్",
  location: "DTCP Approved Layout",
  teluguLocation: "DTCP ఆమోదిత లేఅవుట్",
  size: "200 - 500 Sq. Yards",
  teluguSize: "200 - 500 చదరపు గజాలు",
  price: "Secure Investment",
  teluguPrice: "సురక్షితమైన పెట్టుబడి",
  description:
    "A planned open plot investment opportunity suitable for people looking to invest in developing residential and growth locations.",
  teluguDescription:
    "అభివృద్ధి చెందుతున్న నివాస మరియు వృద్ధి ప్రాంతాలలో పెట్టుబడి పెట్టాలనుకునే వారికి అనుకూలమైన ప్రణాళికాబద్ధమైన ఓపెన్ ప్లాట్ పెట్టుబడి అవకాశం.",

  // Open Plot Video
  video: "/videos/openplot.mp4",

  image: farm,
},

    {
      title: "Agricultural Project",
      teluguTitle: "వ్యవసాయ ప్రాజెక్ట్",
      location: "Green Development Zone",
      teluguLocation: "హరిత అభివృద్ధి ప్రాంతం",
      size: "Investment Ready",
      teluguSize: "పెట్టుబడికి సిద్ధంగా ఉంది",
      price: "Long-Term Returns",
      teluguPrice: "దీర్ఘకాలిక లాభాల అవకాశం",
      description:
        "An agricultural investment opportunity surrounded by natural greenery, designed for long-term land-based asset creation.",
      teluguDescription:
        "సహజమైన పచ్చదనంతో నిండిన ఈ వ్యవసాయ పెట్టుబడి అవకాశం దీర్ఘకాలిక భూమి ఆధారిత ఆస్తి నిర్మాణం కోసం రూపొందించబడింది.",
      image: farm,
    },

    {
      title: "Red Sandalwood Project",
      teluguTitle: "ఎర్రచందనం ప్రాజెక్ట్",
      location: "Premium Plantation Zone",
      teluguLocation: "ప్రీమియం ప్లాంటేషన్ ప్రాంతం",
      size: "Future Wealth Asset",
      teluguSize: "భవిష్యత్ సంపద ఆస్తి",
      price: "High Value Growth",
      teluguPrice: "అధిక విలువ పెరుగుదల అవకాశం",
      description:
        "The Red Sandalwood Project is a premium plantation-focused investment opportunity designed for long-term asset creation and future value growth.",
      teluguDescription:
        "ఎర్రచందనం ప్రాజెక్ట్ దీర్ఘకాలిక ఆస్తి నిర్మాణం మరియు భవిష్యత్ విలువ పెరుగుదలను లక్ష్యంగా చేసుకున్న ప్రీమియం ప్లాంటేషన్ ఆధారిత పెట్టుబడి అవకాశం.",
      video: "/videos/red%20sandalwood%20project.mp4",
      image: farm,
    },

    {
      title: "Luxury Farm Estate",
      teluguTitle: "లగ్జరీ ఫామ్ ఎస్టేట్",
      location: "Nature Investment Property",
      teluguLocation: "ప్రకృతి ఆధారిత పెట్టుబడి ఆస్తి",
      size: "Premium Development",
      teluguSize: "ప్రీమియం అభివృద్ధి",
      price: "Elite Investment",
      teluguPrice: "ప్రీమియం పెట్టుబడి అవకాశం",
      description:
        "A premium farm estate opportunity for people looking to combine nature, land ownership, and long-term investment value.",
      teluguDescription:
        "ప్రకృతి, భూమి యాజమాన్యం మరియు దీర్ఘకాలిక పెట్టుబడి విలువను కలిపి పెట్టుబడి పెట్టాలనుకునే వారికి అనుకూలమైన ప్రీమియం ఫామ్ ఎస్టేట్.",
      image: farm,
    },

    {
      title: "Future Growth Land",
      teluguTitle: "భవిష్యత్ అభివృద్ధి భూమి",
      location: "Emerging Investment Area",
      teluguLocation: "అభివృద్ధి చెందుతున్న పెట్టుబడి ప్రాంతం",
      size: "Verified Property",
      teluguSize: "ధృవీకరించబడిన ఆస్తి",
      price: "Strong Appreciation",
      teluguPrice: "బలమైన విలువ పెరుగుదల అవకాశం",
      description:
        "A future-focused land investment opportunity located in an emerging area selected for its long-term development potential.",
      teluguDescription:
        "దీర్ఘకాలిక అభివృద్ధి అవకాశాలను దృష్టిలో ఉంచుకొని ఎంపిక చేసిన అభివృద్ధి చెందుతున్న ప్రాంతంలో ఉన్న భవిష్యత్ దృష్టితో కూడిన భూమి పెట్టుబడి అవకాశం.",
      image: farm,
    },
  ]

  return (
    <div className="bg-[#021b12] min-h-screen text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#d4a24c] tracking-[6px] text-sm md:text-lg mb-5">
            OUR PROPERTIES | మా ప్రాపర్టీస్
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
            Premium Investment
            <br />
            Opportunities
          </h1>

          <p className="text-[#d4a24c] text-xl md:text-2xl mb-6">
            ప్రీమియం పెట్టుబడి అవకాశాలు
          </p>

          <div className="w-32 h-0.5 bg-[#d4a24c] mx-auto"></div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#0b2b20] rounded-[35px] overflow-hidden border border-[#c89b3c]/20 hover:scale-[1.03] hover:border-[#d4a24c]/50 transition duration-300 shadow-xl"
            >
              {/* Image */}
              <div className="h-72 relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#021b12]/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl text-[#d4a24c] mb-2">
                  {property.title}
                </h2>

                <p className="text-gray-300 text-lg mb-5">
                  {property.teluguTitle}
                </p>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <p>
                      <span className="text-white font-medium">
                        Location | ప్రదేశం:
                      </span>{" "}
                      {property.location}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {property.teluguLocation}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span className="text-white font-medium">
                        Size | విస్తీర్ణం:
                      </span>{" "}
                      {property.size}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {property.teluguSize}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span className="text-white font-medium">
                        Value | పెట్టుబడి విలువ:
                      </span>{" "}
                      {property.price}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {property.teluguPrice}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProperty(property)}
                  className="mt-8 bg-[#c89b3c] text-black px-7 py-3 rounded-full font-semibold hover:bg-[#d4a24c] hover:scale-105 transition duration-300"
                >
                  View Details | వివరాలు చూడండి
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROPERTY DETAILS POPUP */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="relative bg-[#06281d] text-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[30px] border border-[#d4a24c]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 text-white text-xl hover:bg-[#d4a24c] hover:text-black transition"
            >
              ✕
            </button>

            {/* Video or Image */}
            <div className="relative w-full h-[280px] md:h-[450px] overflow-hidden rounded-t-[30px]">
              {selectedProperty.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={selectedProperty.video}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#06281d] via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Details */}
            <div className="p-8 md:p-12">
              <p className="text-[#d4a24c] tracking-[4px] text-sm mb-4">
                PROPERTY DETAILS | ప్రాపర్టీ వివరాలు
              </p>

              <h2 className="text-3xl md:text-5xl text-[#f5d06f] font-semibold mb-2">
                {selectedProperty.title}
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {selectedProperty.teluguTitle}
              </p>

              {/* English Description */}
              <div className="mb-6">
                <h3 className="text-xl text-[#d4a24c] mb-3">
                  About the Property
                </h3>

                <p className="text-gray-300 text-lg leading-8">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Telugu Description */}
              <div className="mb-10 bg-[#0b2b20] p-6 rounded-2xl border border-[#d4a24c]/15">
                <h3 className="text-xl text-[#f5d06f] mb-3">
                  ప్రాపర్టీ గురించి
                </h3>

                <p className="text-gray-300 text-lg leading-8">
                  {selectedProperty.teluguDescription}
                </p>
              </div>

              {/* Property Information */}
              <div className="grid md:grid-cols-3 gap-5 mb-10">
                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/20">
                  <p className="text-gray-400 text-sm mb-2">
                    LOCATION | ప్రదేశం
                  </p>

                  <p className="text-[#f5d06f] text-lg font-semibold">
                    {selectedProperty.location}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {selectedProperty.teluguLocation}
                  </p>
                </div>

                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/20">
                  <p className="text-gray-400 text-sm mb-2">
                    SIZE | విస్తీర్ణం
                  </p>

                  <p className="text-[#f5d06f] text-lg font-semibold">
                    {selectedProperty.size}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {selectedProperty.teluguSize}
                  </p>
                </div>

                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/20">
                  <p className="text-gray-400 text-sm mb-2">
                    INVESTMENT VALUE | పెట్టుబడి విలువ
                  </p>

                  <p className="text-[#f5d06f] text-lg font-semibold">
                    {selectedProperty.price}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {selectedProperty.teluguPrice}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-white/10 pt-10">
                <h3 className="text-2xl md:text-3xl text-[#d4a24c] mb-2">
                  Why Consider This Property?
                </h3>

                <p className="text-gray-400 mb-7">
                  ఈ ప్రాపర్టీని ఎందుకు పరిగణించాలి?
                </p>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-[#0b2b20] rounded-2xl p-6">
                    <div className="text-3xl mb-3">🌱</div>

                    <h4 className="text-xl text-[#f5d06f] mb-2">
                      Growth Potential
                    </h4>

                    <p className="text-gray-400">
                      Suitable for long-term investment and future value creation.
                    </p>

                    <p className="text-gray-500 text-sm mt-3">
                      దీర్ఘకాలిక పెట్టుబడి మరియు భవిష్యత్ విలువ పెరుగుదలకు అనుకూలం.
                    </p>
                  </div>

                  <div className="bg-[#0b2b20] rounded-2xl p-6">
                    <div className="text-3xl mb-3">📍</div>

                    <h4 className="text-xl text-[#f5d06f] mb-2">
                      Strategic Location
                    </h4>

                    <p className="text-gray-400">
                      Selected for its future development potential.
                    </p>

                    <p className="text-gray-500 text-sm mt-3">
                      భవిష్యత్ అభివృద్ధి అవకాశాలను దృష్టిలో ఉంచుకొని ఎంపిక చేసిన ప్రాంతం.
                    </p>
                  </div>

                  <div className="bg-[#0b2b20] rounded-2xl p-6">
                    <div className="text-3xl mb-3">💰</div>

                    <h4 className="text-xl text-[#f5d06f] mb-2">
                      Wealth Creation
                    </h4>

                    <p className="text-gray-400">
                      Designed for investors seeking long-term land-based assets.
                    </p>

                    <p className="text-gray-500 text-sm mt-3">
                      దీర్ఘకాలిక భూమి ఆధారిత ఆస్తులను నిర్మించాలనుకునే పెట్టుబడిదారులకు అనుకూలం.
                    </p>
                  </div>
                </div>
              </div>

              {/* Close */}
              <div className="mt-10 text-center">
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="bg-[#d4a24c] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#f5d06f] hover:scale-105 transition duration-300"
                >
                  Close Details | మూసివేయండి
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Properties