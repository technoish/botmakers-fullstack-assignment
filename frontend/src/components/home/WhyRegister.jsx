import {
  FaMedal,
  FaGavel,
  FaBriefcase,
  FaBolt,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaMedal />,
    title: "NATIONAL RECOGNITION",
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: <FaGavel />,
    title: "FAIR JUDGING",
    desc: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: <FaBriefcase />,
    title: "CAREER OPS",
    desc: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: <FaBolt />,
    title: "HIGH-ENERGY ECO",
    desc: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

function WhyRegister() {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-[#FF4C4C] text-2xl uppercase mb-2">
              Why Register ?
            </p>

            <h2 className="text-5xl text-white uppercase mb-12">
              The League Advantage
            </h2>

            <div className="space-y-10">

              {advantages.map((item, index) => (
                <div key={index} className="flex gap-6">

                  <div className="text-[#FF4C4C] text-4xl mt-2">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-3xl mb-2">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 text-lg">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="max-w-[650px]">

              <img
                src="/image2.png"
                alt="Leaderboard"
                className="w-full rounded-lg"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyRegister;