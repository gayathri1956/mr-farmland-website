function Contact() {

  return (

    <div className="bg-[#021b12] min-h-screen text-white py-24 px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Side */}
        <div>

          <p className="text-[#d4a24c] tracking-[6px] text-lg mb-5">
            CONTACT US
          </p>

          <h1 className="text-6xl font-semibold leading-tight mb-8">

            Let’s Discuss Your
            <br />
            Investment Future

          </h1>

          <div className="w-32 h-0.5 bg-[#d4a24c] mb-10"></div>

          <div className="space-y-8 text-gray-300 text-lg">

            <div>
              <h2 className="text-[#d4a24c] text-2xl mb-2">
                Phone
              </h2>

              <p>+91 9959753136</p>
            </div>

            <div>
              <h2 className="text-[#d4a24c] text-2xl mb-2">
                Email
              </h2>

              <p>mr@mrfarmlandadvisories.co.in</p>
            </div>

            <div>
              <h2 className="text-[#d4a24c] text-2xl mb-2">
                Website
              </h2>

              <p>www.mrfarmlandadvisories.co.in</p>
            </div>

            <div>
              <h2 className="text-[#d4a24c] text-2xl mb-2">
                Tagline
              </h2>

              <p>Invest Today - Secure Tomorrow.</p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-[#0b2b20] p-10 rounded-[35px] border border-[#c89b3c]/20">

          <form
            action="https://formspree.io/f/xlgzyqgq"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#021b12] border border-[#c89b3c]/20 rounded-full px-6 py-4 outline-none text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#021b12] border border-[#c89b3c]/20 rounded-full px-6 py-4 outline-none text-white"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full bg-[#021b12] border border-[#c89b3c]/20 rounded-full px-6 py-4 outline-none text-white"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write Your Inquiry..."
              required
              className="w-full bg-[#021b12] border border-[#c89b3c]/20 rounded-[25px] px-6 py-4 outline-none text-white"
            ></textarea>

            <button
              type="submit"
              className="bg-[#c89b3c] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#d4a24c] transition w-full"
            >

              Send Inquiry

            </button>

          </form>

        </div>

      </div>

    </div>

  )
}

export default Contact