import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Competitions from "../components/home/Competitions";
import UserJourney from "../components/home/UserJourney";
import WhatIsBotLeague from "../components/home/WhatIsBotLeague";
import Categories from "../components/home/Categories";
import CompetitionDisciplines from "../components/home/CompetitionDisciplines";
import WhyRegister from "../components/home/WhyRegister";
import JoinEcosystem from "../components/home/JoinEcosystem";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Competitions />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <CompetitionDisciplines />
      <WhyRegister />
      <JoinEcosystem />
      <Footer />
    </>
  );
}

export default Home;