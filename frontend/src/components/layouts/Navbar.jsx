import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#111] border-b border-zinc-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <div className="text-3xl font-bold text-[#FF4C4C]">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>

        <div className="hidden md:flex gap-10 text-lg">

          <a href="#">Events</a>
          <a href="#">Programs</a>
          <a href="#">Community</a>
          <a href="#">Ranks</a>

        </div>

        <div className="flex gap-3">

          <Link to="/login">
            <button className="border px-6 py-2">
              LOGIN
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-[#FF4C4C] px-6 py-2">
              REGISTER NOW
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;