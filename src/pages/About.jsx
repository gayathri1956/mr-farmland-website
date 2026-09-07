import { useState } from "react"

function About() {
  const [selectedCard, setSelectedCard] = useState(null)

  const cards = [
    {
      id: "story",
      icon: "👤",
      label: "OUR STORY",
      teluguLabel: "మా కథ",
      title: "Who We Are",
      teluguTitle: "మేము ఎవరం?",
      description:
        "Welcome to MR Farmland Advisories, your trusted partner in smart and secure real estate investments.",
      teluguDescription:
        "స్మార్ట్ మరియు సురక్షితమైన రియల్ ఎస్టేట్ పెట్టుబడుల కోసం మీ విశ్వసనీయ భాగస్వామి MR Farmland Advisories కి స్వాగతం.",
      details:
        "We specialize in guiding customers toward profitable investment opportunities in farmlands, open plots, gated communities, and premium real estate ventures.",
      teluguDetails:
        "ఫార్మ్‌ల్యాండ్స్, ఓపెన్ ప్లాట్స్, గేటెడ్ కమ్యూనిటీస్ మరియు ప్రీమియం రియల్ ఎస్టేట్ ప్రాజెక్టుల్లో పెట్టుబడి అవకాశాలను ఎంచుకోవడంలో కస్టమర్లకు మార్గదర్శకత్వం అందించడం మా ప్రత్యేకత.",
    },

    {
      id: "why",
      icon: "⭐",
      label: "WHY US",
      teluguLabel: "మమ్మల్ని ఎందుకు?",
      title: "Why Choose Us?",
      teluguTitle: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
      points: [
        "Trusted Investment Guidance",
        "Verified Properties",
        "High Growth Locations",
        "Transparent Process",
        "Long-Term Wealth Creation",
      ],
      teluguPoints: [
        "నమ్మకమైన పెట్టుబడి మార్గదర్శకత్వం",
        "ధృవీకరించబడిన ప్రాపర్టీలు",
        "అభివృద్ధి అవకాశాలు ఉన్న ప్రాంతాలు",
        "పారదర్శకమైన ప్రక్రియ",
        "దీర్ఘకాలిక సంపద సృష్టి",
      ],
    },

    {
      id: "vision",
      icon: "◇",
      label: "OUR VISION",
      teluguLabel: "మా దృష్టి",
      title: "Our Vision",
      teluguTitle: "మా దృష్టికోణం",
      description:
        "To become one of the most trusted real estate and farmland advisory brands by delivering secure, profitable, and future-focused investment opportunities.",
      teluguDescription:
        "సురక్షితమైన, లాభదాయకమైన మరియు భవిష్యత్ దృష్టితో కూడిన పెట్టుబడి అవకాశాలను అందిస్తూ అత్యంత విశ్వసనీయమైన రియల్ ఎస్టేట్ మరియు ఫార్మ్‌ల్యాండ్ అడ్వైజరీ బ్రాండ్లలో ఒకటిగా ఎదగడం మా లక్ష్యం.",
    },

    {
      id: "mission",
      icon: "✦",
      label: "OUR MISSION",
      teluguLabel: "మా లక్ష్యం",
      title: "Our Mission",
      teluguTitle: "మా మిషన్",
      points: [
        "Guide customers toward wealth-building investments",
        "Provide legally verified properties",
        "Create long-term trust through ethics",
        "Help investors secure future assets",
      ],
      teluguPoints: [
        "సంపదను నిర్మించే పెట్టుబడుల వైపు కస్టమర్లకు మార్గనిర్దేశం చేయడం",
        "చట్టపరంగా ధృవీకరించబడిన ప్రాపర్టీలను అందించడం",
        "నైతికత ద్వారా దీర్ఘకాలిక నమ్మకాన్ని నిర్మించడం",
        "పెట్టుబడిదారులు భవిష్యత్ ఆస్తులను భద్రపరుచుకునేలా సహాయపడటం",
      ],
    },

    {
      id: "services",
      icon: "🌾",
      label: "WHAT WE OFFER",
      teluguLabel: "మేము అందించేవి",
      title: "Our Services",
      teluguTitle: "మా సేవలు",
      services: [
        {
          icon: "🌾",
          title: "Farmland Investments",
          teluguTitle: "ఫార్మ్‌ల్యాండ్ పెట్టుబడులు",
          description:
            "Premium agricultural land with long-term appreciation value.",
          teluguDescription:
            "దీర్ఘకాలిక విలువ పెరుగుదల అవకాశాలు ఉన్న ప్రీమియం వ్యవసాయ భూములు.",
        },
        {
          icon: "🏡",
          title: "Open Plot Ventures",
          teluguTitle: "ఓపెన్ ప్లాట్ వెంచర్స్",
          description:
            "DTCP and RERA approved layouts in future growth zones.",
          teluguDescription:
            "భవిష్యత్ అభివృద్ధి ప్రాంతాల్లో DTCP మరియు RERA ఆమోదిత లేఅవుట్లు.",
        },
        {
          icon: "📈",
          title: "Real Estate Advisory",
          teluguTitle: "రియల్ ఎస్టేట్ అడ్వైజరీ",
          description:
            "Investment planning and market analysis support.",
          teluguDescription:
            "పెట్టుబడి ప్రణాళిక మరియు మార్కెట్ విశ్లేషణకు సహాయం.",
        },
      ],
    },

    {
      id: "values",
      icon: "💎",
      label: "OUR VALUES",
      teluguLabel: "మా విలువలు",
      title: "Customer Commitment",
      teluguTitle: "కస్టమర్ పట్ల మా నిబద్ధత",
      points: [
        "Integrity",
        "Transparency",
        "Customer Satisfaction",
        "Long-Term Relationships",
        "Secure Investments",
      ],
      teluguPoints: [
        "నిజాయితీ",
        "పారదర్శకత",
        "కస్టమర్ సంతృప్తి",
        "దీర్ఘకాలిక సంబంధాలు",
        "సురక్షితమైన పెట్టుబడులు",
      ],
    },
  ]

  return (
    <div className="bg-[#021b12] text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

        <img
          src="/images/about.png"
          alt="MR Farmland"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#021b12]/30 via-transparent to-[#021b12]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#f5d06f] tracking-[5px] text-sm md:text-base mb-5 font-semibold">
            ABOUT MR FARMLAND ADVISORIES
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building Wealth Through
            <br />
            <span className="text-[#f5d06f]">
              Smart Land Investments
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-7">

            <div className="w-16 md:w-28 h-[2px] bg-[#d4a24c]"></div>

            <span className="text-[#f5d06f] text-2xl">
              ✦
            </span>

            <div className="w-16 md:w-28 h-[2px] bg-[#d4a24c]"></div>

          </div>

          <p className="text-white text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Your trusted partner for premium farmland, open plots,
            and secure real estate investments designed for
            long-term growth and wealth creation.
          </p>

          <p className="text-gray-200 mt-4 text-base md:text-lg">
            ప్రీమియం ఫార్మ్‌ల్యాండ్స్, ఓపెన్ ప్లాట్స్ మరియు
            సురక్షితమైన రియల్ ఎస్టేట్ పెట్టుబడులకు మీ విశ్వసనీయ భాగస్వామి.
          </p>

        </div>
      </section>


      {/* ================= INTERACTIVE CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <p className="text-[#d4a24c] tracking-[5px] text-sm mb-4">
            EXPLORE US
          </p>

          <h2 className="text-4xl md:text-5xl text-[#f5d06f] font-semibold">
            Discover Our Story
          </h2>

          <p className="text-gray-400 mt-4">
            Click on any card to explore
            <br />
            ఏ కార్డ్‌పై క్లిక్ చేసినా మరిన్ని వివరాలు చూడవచ్చు
          </p>

          <div className="w-24 h-[2px] bg-[#d4a24c] mx-auto mt-6"></div>

        </div>


        {/* CARDS */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {cards.map((card) => (

            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="
                group
                relative
                bg-[#0b2b20]
                rounded-[30px]
                p-8
                min-h-[270px]
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

              <div className="
                absolute
                -top-20
                -right-20
                w-40
                h-40
                bg-[#d4a24c]/10
                rounded-full
                blur-3xl
                group-hover:bg-[#d4a24c]/20
                transition
              "></div>


              {/* Icon */}

              <div className="
                relative
                text-5xl
                mb-7
                group-hover:scale-110
                transition
                duration-300
              ">
                {card.icon}
              </div>


              {/* Label */}

              <p className="text-[#d4a24c] text-xs tracking-[4px] mb-3">
                {card.label}
              </p>


              {/* Title */}

              <h3 className="
                text-2xl
                md:text-3xl
                text-[#f5d06f]
                font-semibold
                mb-2
              ">
                {card.title}
              </h3>


              <p className="text-gray-400 text-base">
                {card.teluguTitle}
              </p>


              {/* Bottom */}

              <div className="
                absolute
                bottom-7
                right-8
                text-[#d4a24c]
                text-sm
                font-semibold
                group-hover:translate-x-2
                transition
              ">
                EXPLORE →
              </div>

            </div>

          ))}

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
              max-w-3xl
              max-h-[85vh]
              overflow-y-auto
              rounded-[35px]
              border
              border-[#d4a24c]/40
              shadow-2xl
              p-7
              md:p-12
              animate-[popup_0.3s_ease-out]
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

            <p className="text-[#d4a24c] tracking-[4px] text-sm mb-3">
              {selectedCard.label}
            </p>

            <p className="text-[#d4a24c]/80 text-sm mb-5">
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

                  <p className="text-gray-300 leading-8 text-lg">
                    {selectedCard.description}
                  </p>

                </div>

                <div className="bg-[#021b12] rounded-2xl p-6 border border-[#d4a24c]/10">

                  <p className="text-gray-300 leading-8 text-lg">
                    {selectedCard.teluguDescription}
                  </p>

                </div>

                {selectedCard.details && (

                  <>
                    <p className="text-gray-400 leading-8">
                      {selectedCard.details}
                    </p>

                    <p className="text-gray-400 leading-8">
                      {selectedCard.teluguDetails}
                    </p>
                  </>

                )}

              </div>

            )}


            {/* POINTS */}

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
                      p-4
                      border
                      border-[#d4a24c]/10
                    "
                  >

                    <span className="text-[#f5d06f] text-xl">
                      ✓
                    </span>

                    <div>

                      <p className="text-gray-200">
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


            {/* SERVICES */}

            {selectedCard.services && (

              <div className="grid md:grid-cols-3 gap-5 mb-8">

                {selectedCard.services.map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#021b12]
                      rounded-2xl
                      p-6
                      border
                      border-[#d4a24c]/10
                    "
                  >

                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>

                    <h4 className="text-[#f5d06f] text-xl mb-2">
                      {service.title}
                    </h4>

                    <p className="text-gray-500 text-sm mb-3">
                      {service.teluguTitle}
                    </p>

                    <p className="text-gray-400 leading-7 text-sm">
                      {service.description}
                    </p>

                    <p className="text-gray-500 leading-7 text-sm mt-3">
                      {service.teluguDescription}
                    </p>

                  </div>

                ))}

              </div>

            )}


            {/* CLOSE BUTTON */}

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


      {/* ================= BOTTOM ================= */}

      <section className="px-6 pb-20">

        <div className="
          max-w-6xl
          mx-auto
          bg-[#0b2b20]
          rounded-[35px]
          border
          border-[#d4a24c]/20
          p-10
          md:p-14
          text-center
        ">

          <p className="text-[#d4a24c] tracking-[4px] text-sm mb-4">
            MR FARMLAND ADVISORIES
          </p>

          <h2 className="text-3xl md:text-4xl text-[#f5d06f] mb-5">
            Your Land. Your Investment. Your Future.
          </h2>

          <p className="text-gray-400 text-lg">
            మీ భూమి • మీ పెట్టుబడి • మీ భవిష్యత్తు
          </p>

        </div>

      </section>

    </div>
  )
}

export default About