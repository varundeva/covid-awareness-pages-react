import About from "../about/About";
import Hero from "../hero/Hero";
import Spread from "../spread/Spread";
import Tracker from "../tracker/Tracker";

function Home() {
  return (
    <div>
      <Hero />
      <Tracker />
      <About />
      <Spread />
    </div>
  );
}

export default Home;
