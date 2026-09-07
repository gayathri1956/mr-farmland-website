import { useState } from "react"

function InvestmentGuide() {
  const [selectedCard, setSelectedCard] = useState(null)

  const cards = [
    {
      id: "realestate",
      icon: "🏡",
      label: "INVESTMENT BASICS",
      teluguLabel: "పెట్టుబడి ప్రాథమిక అంశాలు",
      title: "Real Estate & Farmland",
      teluguTitle: "రియల్ ఎస్టేట్ & ఫార్మ్‌ల్యాండ్",

      description:
        "Real estate and farmland can be valuable long-term assets for people looking to build and preserve wealth.",

      teluguDescription:
        "సంపదను నిర్మించుకోవడానికి మరియు భవిష్యత్తు కోసం ఆస్తులను భద్రపరచుకోవాలనుకునే వారికి రియల్ ఎస్టేట్ మరియు ఫార్మ్‌ల్యాండ్ మంచి దీర్ఘకాలిక ఆస్తులుగా ఉండవచ్చు.",

      details:
        "Smart investors may consider farmland and growth-corridor properties because they can offer opportunities for long-term appreciation, future financial planning, and tangible asset ownership.",

      teluguDetails:
        "స్మార్ట్ పెట్టుబడిదారులు ఫార్మ్‌ల్యాండ్ మరియు అభివృద్ధి చెందుతున్న ప్రాంతాల్లోని ప్రాపర్టీలను పరిగణించవచ్చు. ఇవి దీర్ఘకాలిక విలువ పెరుగుదల, భవిష్యత్ ఆర్థిక ప్రణాళిక మరియు ప్రత్యక్ష ఆస్తి యాజమాన్యానికి అవకాశాలను అందించవచ్చు.",
    },

    {
      id: "benefits",
      icon: "💰",
      label: "INVESTMENT BENEFITS",
      teluguLabel: "పెట్టుబడి ప్రయోజనాలు",
      title: "Investment Benefits",
      teluguTitle: "పెట్టుబడి ప్రయోజనాలు",

      points: [
        "Long-Term Appreciation",
        "Future Financial Security",
        "Tangible Asset Ownership",
        "Wealth Creation Opportunities",
        "High Growth Potential Locations",
        "Secure Investment Option",
      ],

      teluguPoints: [
        "దీర్ఘకాలిక విలువ పెరుగుదల",
        "భవిష్యత్ ఆర్థిక భద్రత",
        "ప్రత్యక్ష ఆస్తి యాజమాన్యం",
        "సంపద సృష్టి అవకాశాలు",
        "అభివృద్ధి అవకాశాలు ఉన్న ప్రాంతాలు",
        "సురక్షితమైన పెట్టుబడి ఎంపిక",
      ],
    },

    {
      id: "land",
      icon: "📈",
      label: "WHY LAND?",
      teluguLabel: "భూమిలో ఎందుకు పెట్టుబడి?",
      title: "Why Invest In Land?",
      teluguTitle: "భూమిలో ఎందుకు పెట్టుబడి పెట్టాలి?",

      subCards: [
        {
          icon: "📈",
          title: "Appreciating Asset",
          teluguTitle: "విలువ పెరిగే ఆస్తి",
          description:
            "Land value may increase over time depending on location, development, demand and other market factors.",
          teluguDescription:
            "ప్రాంతం, అభివృద్ధి, డిమాండ్ మరియు ఇతర మార్కెట్ పరిస్థితులపై ఆధారపడి భూమి విలువ కాలక్రమేణా పెరగవచ్చు.",
        },

        {
          icon: "🌍",
          title: "Limited Resource",
          teluguTitle: "పరిమిత వనరు",
          description:
            "Land is a limited resource, while development and population growth can influence demand in suitable locations.",
          teluguDescription:
            "భూమి పరిమిత వనరు. సరైన ప్రాంతాల్లో అభివృద్ధి మరియు జనాభా పెరుగుదల భూమికి డిమాండ్‌ను ప్రభావితం చేయవచ్చు.",
        },

        {
          icon: "🛡️",
          title: "Future Security",
          teluguTitle: "భవిష్యత్ భద్రత",
          description:
            "Land ownership can become a tangible asset that may be useful for family financial planning and future generations.",
          teluguDescription:
            "భూమి యాజమాన్యం కుటుంబ ఆర్థిక ప్రణాళికకు మరియు భవిష్యత్ తరాలకు ఉపయోగపడే ప్రత్యక్ష ఆస్తిగా ఉండవచ్చు.",
        },
      ],
    },

    {
      id: "future",
      icon: "🌱",
      label: "FUTURE PLANNING",
      teluguLabel: "భవిష్యత్ ప్రణాళిక",
      title: "Future Wealth & Security",
      teluguTitle: "భవిష్యత్ సంపద & భద్రత",

      description:
        "Wise investment decisions focus on assets, locations and opportunities that align with long-term financial goals.",

      teluguDescription:
        "తెలివైన పెట్టుబడి నిర్ణయాలు దీర్ఘకాలిక ఆర్థిక లక్ష్యాలకు అనుగుణంగా ఉండే ఆస్తులు, ప్రాంతాలు మరియు అవకాశాలపై దృష్టి పెడతాయి.",

      details:
        "At MR Farmland Advisories, our goal is to help investors understand available land opportunities and make informed decisions based on their individual goals and requirements.",

      teluguDetails:
        "MR Farmland Advisoriesలో మా లక్ష్యం అందుబాటులో ఉన్న భూమి పెట్టుబడి అవకాశాలను అర్థం చేసుకోవడంలో పెట్టుబడిదారులకు సహాయం చేయడం మరియు వారి లక్ష్యాలు, అవసరాలకు అనుగుణంగా సమాచారంతో కూడిన నిర్ణయాలు తీసుకునేలా మార్గనిర్దేశం చేయడం.",
    },
  ]

  return (
    <div className="bg-[#021b12] min-h-screen text-white">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0 bg-[#021b12]"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2b20] via-[#021b12] to-[#021b12]"></div>

        {/* Hero Content */}

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          <p className="text-[#d4a24c] tracking-[6px] text-sm md:text-base mb-5 font-semibold">
            INVESTMENT GUIDE
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">

            Why Smart Investors
            <br />

            <span className="text-[#f5d06f]">
              Choose Land Assets
            </span>

          </h1>

          <div className="flex items-center justify-center gap-4 mb-7">

            <div className="w-16 md:w-28 h-[2px] bg-[#d4a24c]"></div>

            <span className="text-[#f5d06f] text-2xl">
              ✦
            </span>

            <div className="w-16 md:w-28 h-[2px] bg-[#d4a24c]"></div>

          </div>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-3xl mx-auto">

            Understand land investment opportunities,
            benefits and long-term considerations.

          </p>

          <p className="text-gray-400 mt-3 text-base md:text-lg">

            భూమి పెట్టుబడి అవకాశాలు, ప్రయోజనాలు మరియు
            దీర్ఘకాలిక అంశాలను తెలుసుకోండి.

          </p>

        </div>

      </section>


      {/* ================= CARDS ================= */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <p className="text-[#d4a24c] tracking-[5px] text-sm mb-4">
            EXPLORE
          </p>

          <h2 className="text-4xl md:text-5xl text-[#f5d06f] font-semibold">
            Investment Insights
          </h2>

          <p className="text-gray-400 mt-4">
            Click a card to explore
          </p>

          <p className="text-gray-500 mt-1">
            ఏ కార్డ్‌పై క్లిక్ చేసినా పూర్తి వివరాలు చూడవచ్చు
          </p>

          <div className="w-24 h-[2px] bg-[#d4a24c] mx-auto mt-6"></div>

        </div>


        {/* CARD GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          {cards.map((card) => (

            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="
                group
                relative
                bg-[#0b2b20]
                p-10
                md:p-12
                rounded-[35px]
                min-h-[320px]
                border
                border-[#d4a24c]/20
                cursor-pointer
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#d4a24c]/70
                hover:shadow-[0_20px_50px_rgba(212,162,76,0.15)]
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  w-48
                  h-48
                  rounded-full
                  bg-[#d4a24c]/10
                  blur-3xl
                  group-hover:bg-[#d4a24c]/20
                  transition
                "
              ></div>


              {/* Icon */}

              <div className="relative text-6xl mb-8 group-hover:scale-110 transition duration-300">
                {card.icon}
              </div>


              {/* Label */}

              <p className="text-[#d4a24c] text-xs tracking-[4px] mb-3">
                {card.label}
              </p>


              {/* Title */}

              <h3 className="text-3xl md:text-4xl text-[#f5d06f] font-semibold mb-3">
                {card.title}
              </h3>


              <p className="text-gray-400 text-lg">
                {card.teluguTitle}
              </p>


              {/* Explore */}

              <div
                className="
                  absolute
                  bottom-8
                  right-10
                  text-[#d4a24c]
                  font-semibold
                  text-sm
                  group-hover:translate-x-2
                  transition
                "
              >
                EXPLORE →
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= QUOTE ================= */}

      <section className="px-6 pb-20">

        <div
          className="
            max-w-6xl
            mx-auto
            bg-[#0b2b20]
            border
            border-[#d4a24c]/20
            rounded-[40px]
            p-10
            md:p-16
            text-center
          "
        >

          <div className="text-[#d4a24c] text-4xl mb-6">
            ✦
          </div>

          <h2 className="text-3xl md:text-5xl text-[#f5d06f] leading-tight mb-6">

            Invest With Knowledge.
            <br />

            Build For The Future.

          </h2>

          <p className="text-gray-400 text-lg">
            జ్ఞానంతో పెట్టుబడి పెట్టండి • భవిష్యత్తు కోసం నిర్మించండి
          </p>

        </div>

      </section>


      {/* ================= POPUP ================= */}

      {selectedCard && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-5
          "
          onClick={() => setSelectedCard(null)}
        >

          <div
            className="
              relative
              bg-[#0b2b20]
              w-full
              max-w-4xl
              max-h-[85vh]
              overflow-y-auto
              rounded-[35px]
              border
              border-[#d4a24c]/40
              shadow-2xl
              p-8
              md:p-12
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              onClick={() => setSelectedCard(null)}
              className="
                absolute
                top-5
                right-6
                w-10
                h-10
                rounded-full
                bg-[#021b12]
                text-gray-300
                text-xl
                hover:bg-[#d4a24c]
                hover:text-black
                transition
              "
            >
              ✕
            </button>


            {/* ICON */}

            <div className="text-6xl mb-5">
              {selectedCard.icon}
            </div>


            {/* LABEL */}

            <p className="text-[#d4a24c] tracking-[4px] text-sm mb-2">
              {selectedCard.label}
            </p>

            <p className="text-gray-500 text-sm mb-5">
              {selectedCard.teluguLabel}
            </p>


            {/* TITLE */}

            <h2 className="text-4xl md:text-5xl text-[#f5d06f] font-semibold mb-2">
              {selectedCard.title}
            </h2>

            <h3 className="text-xl text-gray-300 mb-8">
              {selectedCard.teluguTitle}
            </h3>


            {/* DESCRIPTION */}

            {selectedCard.description && (

              <div className="space-y-5 mb-8">

                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/10">

                  <p className="text-gray-300 text-lg leading-8">
                    {selectedCard.description}
                  </p>

                </div>

                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/10">

                  <p className="text-gray-400 text-lg leading-8">
                    {selectedCard.teluguDescription}
                  </p>

                </div>

              </div>

            )}


            {/* DETAILS */}

            {selectedCard.details && (

              <div className="space-y-5 mb-8">

                <p className="text-gray-300 text-lg leading-8">
                  {selectedCard.details}
                </p>

                <p className="text-gray-400 text-lg leading-8">
                  {selectedCard.teluguDetails}
                </p>

              </div>

            )}


            {/* BENEFITS */}

            {selectedCard.points && (

              <div className="space-y-4 mb-8">

                {selectedCard.points.map((point, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      bg-[#021b12]
                      rounded-2xl
                      p-5
                      border
                      border-[#d4a24c]/10
                    "
                  >

                    <span className="text-[#f5d06f] text-xl">
                      ✓
                    </span>

                    <div>

                      <p className="text-gray-200 text-lg">
                        {point}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        {selectedCard.teluguPoints[index]}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}


            {/* LAND REASONS */}

            {selectedCard.subCards && (

              <div className="grid md:grid-cols-3 gap-5 mb-8">

                {selectedCard.subCards.map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#021b12]
                      rounded-2xl
                      p-6
                      border
                      border-[#d4a24c]/10
                      hover:border-[#d4a24c]/50
                      transition
                    "
                  >

                    <div className="text-4xl mb-4">
                      {item.icon}
                    </div>

                    <h4 className="text-[#f5d06f] text-xl mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm mb-4">
                      {item.teluguTitle}
                    </p>

                    <p className="text-gray-400 leading-7 text-sm">
                      {item.description}
                    </p>

                    <p className="text-gray-500 leading-7 text-sm mt-3">
                      {item.teluguDescription}
                    </p>

                  </div>

                ))}

              </div>

            )}


            {/* CLOSE */}

            <button
              onClick={() => setSelectedCard(null)}
              className="
                w-full
                bg-[#d4a24c]
                text-black
                py-4
                rounded-full
                font-semibold
                text-lg
                hover:bg-[#f5d06f]
                hover:scale-[1.02]
                transition
              "
            >
              Close Details | వివరాలు మూసివేయండి
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default InvestmentGuide