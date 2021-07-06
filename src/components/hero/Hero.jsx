import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>
          Coronavirus Disease (COVIDE-19)
          <br />
          Advice for the People
        </h3>
        <div className="heroInfo">
          <h4>All about masks in the context of COVID-19</h4>
          <ul>
            <li>
              Clean your hands before you put your mask on, as well as before
              and after you take it off, and after you touch it at any time.
            </li>
            <li>Make sure it covers both your nose, mouth and chin.</li>
            <li>
              When you take off a mask, store it in a clean plastic bag, and
              every day either wash it if it’s a fabric mask, or dispose of a
              medical mask in a trash bin.
            </li>
            <li>Don’t use masks with valves.</li>
          </ul>
        </div>
        <div className="infoButton">
          <button>Learn More About Covid19</button>
        </div>
      </div>
      <img src="/images/mask-man.svg" alt="" />
    </div>
  );
}

export default Hero;
