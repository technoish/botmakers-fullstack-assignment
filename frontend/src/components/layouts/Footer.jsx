import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-3xl uppercase mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-6">

              <ul className="space-y-4 text-zinc-400 text-lg">

                <li>The Arena</li>
                <li>Episodes</li>
                <li>National Rankings</li>
                <li>Programs</li>
                <li>Rulebooks</li>

              </ul>

              <ul className="space-y-4 text-zinc-400 text-lg">

                <li>Join the Team</li>
                <li>Sponsorships</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Legal</li>

              </ul>

            </div>

          </div>

          {/* Social */}

          <div className="flex flex-col lg:items-end">

            <h3 className="text-white text-3xl uppercase mb-8">
              Social Media
            </h3>

            <div className="flex gap-8 text-zinc-400 text-4xl">

              <FaYoutube className="hover:text-[#FF4C4C] cursor-pointer transition" />

              <FaInstagram className="hover:text-[#FF4C4C] cursor-pointer transition" />

              <FaFacebookF className="hover:text-[#FF4C4C] cursor-pointer transition" />

              <FaTwitter className="hover:text-[#FF4C4C] cursor-pointer transition" />

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;