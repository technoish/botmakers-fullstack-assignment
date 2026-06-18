import { Link } from "react-router-dom";

const cards = [
  {
    title: "BECOME A JUDGE",
  },
  {
    title: "VOLUNTEER",
  },
  {
    title: "COMMUNITY MEMBER",
  },
];

const sponsors = [
  {
    name: "NIT DELHI",
    image: "/sponsor1.png",
  },
  {
    name: "INDIAN BIT",
    image: "/sponsor2.png",
  },
  {
    name: "NIT SILCHAR",
    image: "/sponsor3.png",
  },
  {
    name: "ROBO COMPANY",
    image: "/sponsor4.png",
  },
  {
  name: "IIT BOMBAY",
    image: "/sponsor5.png",
  },
  {
    name: "ROBO COMPANY",
    image: "/sponsor6.png",
  },
];

function JoinEcosystem() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-white uppercase mb-16">
          Join The Ecosystem
        </h2>

        {/* Forms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                border
                border-zinc-700
                rounded-xl
                p-6
                bg-[#121212]
              "
            >
              <h3 className="text-white text-2xl mb-8">
                {card.title}
              </h3>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Name"
                  className="
                    w-full
                    bg-zinc-900
                    border
                    border-zinc-700
                    p-3
                    rounded
                    text-white
                  "
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="
                    w-full
                    bg-zinc-900
                    border
                    border-zinc-700
                    p-3
                    rounded
                    text-white
                  "
                />

                <input
                  type="text"
                  placeholder="Enroll"
                  className="
                    w-full
                    bg-zinc-900
                    border
                    border-zinc-700
                    p-3
                    rounded
                    text-white
                  "
                />
                <Link to="/signup">
                  <button
                      className="
                        my-4
                        w-full
                        bg-[#FF4C4C]
                        hover:bg-red-600
                        py-3
                        rounded
                        text-white
                        font-semibold
                      "
                    >
                      SIGN UP
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Sponsors */}
        <div>

          <h3 className="text-3xl text-white mb-12 uppercase">
            Sponsors
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">

            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                  text-center
                "
              >
                <img
                  src={sponsor.image}
                  alt="Sponsor"
                  className="
                    w-24
                    h-24
                    object-contain
                    opacity-70
                  "
                />

                <p className="text-zinc-400 mt-3 ml-4">
                  {sponsor.name}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinEcosystem;