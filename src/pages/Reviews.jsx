function Reviews() {

  const reviews = [

    {
      name: "Ravi Kumar",
      review:
        "Excellent farmland investment guidance and professional support throughout the process.",
    },

    {
      name: "Sneha Reddy",
      review:
        "Very transparent team with genuine investment opportunities in high-growth locations.",
    },

    {
      name: "Arjun Varma",
      review:
        "MR Farmland Advisories helped us invest confidently for our family’s future.",
    },

  ]

  return (

    <div className="bg-[#021b12] min-h-screen text-white py-24 px-10">

      <div className="max-w-7xl mx-auto">

        <p className="text-[#d4a24c] tracking-[6px] text-lg mb-5">

          REVIEWS

        </p>

        <h1 className="text-6xl font-semibold mb-6">

          Client Reviews

        </h1>

        <div className="w-32 h-0.5 bg-[#d4a24c] mb-16"></div>

        <div className="grid md:grid-cols-3 gap-10">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-[#0b2b20] p-10 rounded-[30px] border border-[#c89b3c]/20"
            >

              <div className="text-yellow-400 text-2xl mb-6">

                ★★★★★

              </div>

              <p className="text-gray-300 leading-8 mb-8">

                {item.review}

              </p>

              <h2 className="text-[#d4a24c] text-2xl">

                {item.name}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Reviews