import {
  FaLightbulb,
  FaUserCog,
  FaRobot,
} from "react-icons/fa";

import { MdOutlineSportsEsports } from "react-icons/md";

const categories = [
  {
    title: "MINI MAKERS",
    subtitle: "Where Creativity Meets Logic.",
    icon: <FaRobot size={48} />,
  },
  {
    title: "JUNIOR INNOVATORS",
    subtitle: "Engineering & Strategy Fundamentals.",
    icon: <FaLightbulb size={48} />,
  },
  {
    title: "YOUNG ENGINEERS",
    subtitle: "Advanced Wireless & Autonomous Control.",
    icon: <FaUserCog size={48} />,
  },
  {
    title: "ROBO MINDS",
    subtitle: "Elite Professional Sports & Robotics.",
    icon: <MdOutlineSportsEsports size={48} />,
  },
];

function Categories() {
  return (
    <section className="bg-[#111] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-12 uppercase">
          Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-800
                border
                border-zinc-700
                rounded-xl
                p-8
                hover:border-yellow-500
                transition
                min-h-[280px]
              "
            >
              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl text-white mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 mb-8">
                {item.subtitle}
              </p>

              <button className="text-[#FF4C4C] font-semibold">
                LEARN MORE →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;