import { FaChartLine } from "react-icons/fa";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    desc: "From one-off events to a year-round competitive season.",
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    desc: "Your professional robotics legacy, tracked and verified.",
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    desc: "Benchmark your skills against the best engineers in India.",
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    desc: "Turning arena victories into real-world industry opportunities.",
  },
];

function WhatIsBotLeague() {
  return (
    <section className="bg-[#111] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16 uppercase">
          What Is BotLeague?
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">

            {features.map((item) => (
              <div key={item.number}>
                <h3 className="text-[#FF4C4C] text-3xl mb-3">
                  {item.number}
                </h3>

                <h4 className="text-white text-3xl mb-3">
                  {item.title}
                </h4>

                <p className="text-zinc-400 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          <div className="flex items-center justify-center">

            <div className="w-72 h-72 border border-zinc-700 rounded-xl flex items-center justify-center">

              <img
                src="image1.png"
                alt="diagram"
                className="w-full h-full object-contain p-6"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatIsBotLeague;