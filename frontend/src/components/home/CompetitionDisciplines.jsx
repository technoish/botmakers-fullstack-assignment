const disciplines = [
  {
    title: "Robo Race",
    image: "/image37.png",
  },
  {
    title: "Line Follower",
    image: "/image38.png",
  },
  {
    title: "RC Racing",
    image: "/image39.png",
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: "/image40.png",
  },
  {
    title: "Robo Hockey",
    image: "/image41.png",
  },
  {
    title: "Robo War",
    image: "/image42.png",
  },
];

function CompetitionDisciplines() {
  return (
    <section className="bg-[#111] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#FF4C4C] uppercase text-xl mb-3">
          Sports
        </p>

        <h2 className="text-5xl text-white mb-12 uppercase">
          Competition Disciplines
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {disciplines.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                overflow-hidden
                hover:scale-105
                transition
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-white text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CompetitionDisciplines;