function Home() {
  return (
    <div className="bg-[#021b12] text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <div className="relative min-h-screen flex items-center px-6 md:px-20 pt-40 pb-32">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">

          {/* Brand Name */}
          <p className="text-[#f5d06f] tracking-[6px] text-lg mb-3 font-semibold">
            MR FARMLAND ADVISORIES
          </p>

          <p className="text-gray-300 text-base md:text-lg mb-8">
            మీ విశ్వసనీయ ఫార్మ్‌ల్యాండ్ అడ్వైజరీ
          </p>


          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
            Invest Today
            <br />
            Secure Tomorrow
          </h1>

          <h2 className="text-2xl md:text-4xl text-[#f5d06f] font-semibold leading-tight mb-8">
            ఈరోజు పెట్టుబడి పెట్టండి
            <br />
            రేపటి భవిష్యత్తును భద్రపరచండి
          </h2>


          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl mb-3">
            Premium farmland and real estate investment opportunities
            designed for long-term growth, wealth creation,
            and secure futures.
          </p>

          <p className="text-gray-400 text-base leading-7 max-w-2xl mb-10">
            దీర్ఘకాలిక అభివృద్ధి, సంపద సృష్టి మరియు భద్రమైన భవిష్యత్తు కోసం
            ప్రీమియం వ్యవసాయ భూములు మరియు రియల్ ఎస్టేట్ పెట్టుబడి అవకాశాలు.
          </p>


          {/* Explore Button */}
          <button className="bg-[#d4a24c] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
            Explore Properties
          </button>

          <p className="text-gray-300 text-sm mt-3">
            ప్రాపర్టీలను చూడండి
          </p>

        </div>

      </div>


      {/* ================= FEATURES SECTION ================= */}

      <div className="px-6 md:px-20 pb-20 -mt-16 relative z-20">

        <div className="grid md:grid-cols-4 gap-8 bg-[#06281d] border border-[#d4a24c]/20 rounded-[35px] p-10 shadow-2xl">


          {/* Premium Farmlands */}
          <div>

            <h2 className="text-[#f5d06f] text-2xl mb-2">
              Premium Farmlands
            </h2>

            <p className="text-[#d4a24c] mb-4">
              ప్రీమియం వ్యవసాయ భూములు
            </p>

            <p className="text-gray-300 leading-8">
              Carefully selected high potential agricultural
              and investment lands.
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-2">
              అధిక పెట్టుబడి మరియు అభివృద్ధి అవకాశాలు ఉన్న
              వ్యవసాయ భూములను జాగ్రత్తగా ఎంపిక చేస్తాము.
            </p>

          </div>


          {/* Expert Guidance */}
          <div>

            <h2 className="text-[#f5d06f] text-2xl mb-2">
              Expert Guidance
            </h2>

            <p className="text-[#d4a24c] mb-4">
              నిపుణుల మార్గదర్శకత్వం
            </p>

            <p className="text-gray-300 leading-8">
              End-to-end support from property selection
              to documentation.
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-2">
              ప్రాపర్టీ ఎంపిక నుండి డాక్యుమెంటేషన్ వరకు
              పూర్తి సహాయం మరియు మార్గదర్శకత్వం.
            </p>

          </div>


          {/* Safe Investment */}
          <div>

            <h2 className="text-[#f5d06f] text-2xl mb-2">
              Safe Investment
            </h2>

            <p className="text-[#d4a24c] mb-4">
              సురక్షితమైన పెట్టుబడి
            </p>

            <p className="text-gray-300 leading-8">
              Transparent deals with legal clarity
              and investment security.
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-2">
              పారదర్శకమైన లావాదేవీలు, చట్టపరమైన స్పష్టత
              మరియు పెట్టుబడి భద్రత.
            </p>

          </div>


          {/* Wealth Creation */}
          <div>

            <h2 className="text-[#f5d06f] text-2xl mb-2">
              Wealth Creation
            </h2>

            <p className="text-[#d4a24c] mb-4">
              సంపద సృష్టి
            </p>

            <p className="text-gray-300 leading-8">
              Build long-term wealth with appreciating
              land assets.
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-2">
              విలువ పెరుగుతున్న భూమి ఆస్తులతో
              దీర్ఘకాలిక సంపదను నిర్మించుకోండి.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home