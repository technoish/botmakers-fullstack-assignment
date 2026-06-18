import {
  FaTools,
  FaLandmark,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const steps = [
  {
    step: "STEP 1",
    title: "BUILD YOUR TEAM",
    icon: <FaTools size={40} />,
  },
  {
    step: "STEP 2",
    title: "COMPETE ACROSS INDIA",
    icon: <FaLandmark size={40} />,
  },
  {
    step: "STEP 3",
    title: "EARN NATIONAL RANKING & VALUE",
    icon: <FaTrophy size={40} />,
  },
  {
    step: "STEP 4",
    title: "JOIN THE LEAGUE",
    icon: <FaUsers size={40} />,
  },
];

function UserJourney() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#FF4C4C] text-2xl font-semibold uppercase">
            User Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 uppercase">
            Your Path To The League
          </h2>

          <p className="text-zinc-500 mt-4 text-xl">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        <div className="relative">

          {/* Blue line */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-1 bg-blue-600"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >

                <div className="w-32 h-32 rounded-full bg-zinc-900 border-[12px] border-zinc-800 flex items-center justify-center">

                  <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                </div>

                <div className="w-[2px] h-10 bg-zinc-500 my-2"></div>

                <p className="text-[#FF4C4C] font-semibold text-xl mb-2">
                  {item.step}
                </p>

                <h3 className="text-white text-2xl font-medium max-w-[220px]">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default UserJourney;