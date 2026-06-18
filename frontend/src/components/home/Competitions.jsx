// const liveNow = {
//   title: "Bengaluru Regionals"
// }

// const upcoming = [
//   {
//     title: "Event in Mumbai",
//     date: "11/11/25",
//     location: "BKC",
//     category: "Lorem"
//   },
//   {
//     title: "Event in Delhi",
//     date: "11/11/25",
//     location: "BKC",
//     category: "Lorem"
//   }
// ]

// const pastResults = [
//   "Bengaluru Regionals",
//   "Mumbai Regionals",
//   "Delhi Regionals"
// ]
import { Link } from "react-router-dom";

function Competitions() {
  return (
    <section className="bg-[#111] py-20 relative overflow-hidden">
      <div
        className="
        absolute
        top-0
        right-0
        w-[450px]
        h-[450px]
        rounded-full
        bg-red-500/10
        blur-[180px]
        pointer-events-none
      "
      ></div>
      <div
        className="
        absolute
        bottom-0
        left-0
        w-[450px]
        h-[450px]
        rounded-full
        bg-red-500/10
        blur-[180px]
        pointer-events-none
      "
      ></div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-12 tracking-wider">
          COMPETITIONS & EVENTS
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LIVE NOW */}
          <div>
            <h3 className="text-[#FF4C4C] text-3xl mb-6 uppercase">
              Live Now
            </h3>

            <div className="border border-zinc-700 rounded-lg p-5 bg-[#181818] h-full">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl text-white">
                  Bengaluru Regionals
                </h4>

                <span className="bg-[#FF4C4C] text-xs px-3 py-1 rounded">
                  Ongoing
                </span>
              </div>

              <p className="text-zinc-500 mb-4">Lorem Ipsum</p>

              <hr className="border-zinc-700 mb-6" />

              {/* Bracket Placeholder */}
              <div className="mt-4 relative h-[250px]">

                {/* Round 1 */}
                <div className="absolute left-0 top-14 w-16 h-7 bg-zinc-600 rounded"></div>
                <div className="absolute left-0 top-28 w-16 h-7 bg-zinc-600 rounded"></div>

                <div className="absolute left-0 top-44 w-16 h-7 bg-zinc-600 rounded"></div>
                <div className="absolute left-0 top-60 w-16 h-7 bg-zinc-600 rounded"></div>

                {/* Round 2 */}
                <div className="absolute left-32 top-24 w-14 h-7 bg-zinc-600 rounded"></div>

                <div className="absolute left-32 top-52 w-14 h-7 bg-zinc-600 rounded"></div>

                {/* Final */}
                <div className="absolute left-64 top-36 w-14 h-7 bg-zinc-600 rounded"></div>

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 390 130"
                >
                  <path
                    d="M62 14 H85 V42 H128"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M62 70 H85 V42 H128"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M62 126 H85 V154 H128"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M62 188 H85 V154 H128"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M184 49 H215 V105 H254"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M184 161 H215 V105 H254"
                    stroke="#FF4C4C"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

              </div>
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <h3 className="text-white text-3xl mb-6 uppercase">
              Upcoming
            </h3>

            <div className="space-y-4">

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="border border-zinc-700 rounded-lg p-5 bg-[#181818]"
                >
                  <h4 className="text-2xl text-white mb-4">
                    Event in {item === 1 ? "Mumbai" : "Delhi"}
                  </h4>

                  <div className="grid grid-cols-3 gap-4 text-zinc-300 mb-6">
                    <div>
                      <p className="text-sm text-zinc-500">Date</p>
                      <p>11/11/25</p>
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">Location</p>
                      <p>BKC</p>
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">Category</p>
                      <p>Lorem</p>
                    </div>
                  </div>

                  <Link to="/signup">
                    <button className="w-full bg-[#FF4C4C] hover:bg-red-600 py-3 text-xl font-semibold rounded">
                      REGISTER
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <h3 className="text-white text-3xl mb-6 uppercase">
              Past Results
            </h3>

            <div className="border border-zinc-700 rounded-lg p-5 bg-[#181818] h-full">
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <h4 className="text-2xl text-white mb-1">
                    Bengaluru Regionals
                  </h4>

                  <p className="text-zinc-500 mb-4">
                    Lorem Ipsum
                  </p>

                  {item !== 3 && (
                    <hr className="border-zinc-700 mb-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Competitions;