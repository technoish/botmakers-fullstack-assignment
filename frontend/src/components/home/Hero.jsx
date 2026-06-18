import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative min-h-[650px]">

      <img
        src="/rectangle9.png"
        alt="robotics arena"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24">

        <div className="inline-block bg-black/70 border border-[#FF4C4C] px-4 py-2 mb-8">
          🔴 LIVE : Episode 14. Bengaluru Regionals
        </div>

        <h1 className="text-6xl font-bold uppercase leading-tight max-w-4xl">
          INDIA'S ULTIMATE
          <br />
          ROBOTICS ARENA
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-xl">
          Build. Compete. Rank.
          The National Ecosystem for Robotics Arena
        </p>

        <div className="flex gap-4 mt-8">
          <Link to="/signup">
            <button className="bg-[#FF4C4C] px-8 py-4 rounded">
              CREATE ACCOUNT
            </button>
          </Link>

          <button className="border border-white px-8 py-4 rounded">
            EXPLORE EVENTS
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;