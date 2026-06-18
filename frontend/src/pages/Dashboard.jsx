import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaRobot,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="border-b border-zinc-800 p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-2
          bg-red-500
          hover:bg-red-600
          px-5
          py-2
          rounded
        "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-8">

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#181818] p-6 rounded-xl border border-zinc-800">
            <FaRobot className="text-4xl text-red-500 mb-4" />

            <h3 className="text-zinc-400">
              Registered Events
            </h3>

            <p className="text-4xl font-bold mt-2">
              3
            </p>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl border border-zinc-800">
            <FaTrophy className="text-4xl text-yellow-500 mb-4" />

            <h3 className="text-zinc-400">
              Ranking
            </h3>

            <p className="text-4xl font-bold mt-2">
              #15
            </p>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl border border-zinc-800">
            <FaUsers className="text-4xl text-blue-500 mb-4" />

            <h3 className="text-zinc-400">
              Competitions
            </h3>

            <p className="text-4xl font-bold mt-2">
              12
            </p>
          </div>

        </div>
        {/* User Details */}
        <div className="bg-[#181818] rounded-xl p-6 border border-zinc-800 mb-10">

          <h3 className="text-2xl font-semibold mb-4">
            Profile
          </h3>

          <div className="space-y-3">
            <p>
              <span className="text-zinc-400">
                Name:
              </span>{" "}
              {user?.name}
            </p>

            <p>
              <span className="text-zinc-400">
                Email:
              </span>{" "}
              {user?.email}
            </p>
          </div>

        </div>

        {/* Upcoming Competitions */}
        <div className="grid md:grid-cols-3 gap-5">

          {[
            "Bengaluru Regionals",
            "Mumbai Robotics Challenge",
            "Delhi Bot Arena",
          ].map((event) => (
            <div
              key={event}
              className="
              bg-[#181818]
              border
              border-zinc-800
              rounded-xl
              p-5
              hover:border-red-500
              transition
            "
            >
              <h4 className="text-xl font-semibold mb-2">
                {event}
              </h4>

              <p className="text-zinc-400">
                Upcoming Robotics Competition
              </p>

              <button className="mt-4 bg-red-500 px-4 py-2 rounded">
                View
              </button>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;