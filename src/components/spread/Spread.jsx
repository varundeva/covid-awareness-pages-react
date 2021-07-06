import "./spread.css";
import SpreadCard from "./SpreadCard";
function Spread() {
  return (
    <div className="spread">
      <h2 className="spreadHeading">How Coronavirus Spread?</h2>
      <p className="spreadData">
        Because it's a new illness, we do not know exactly how coronavirus
        spreads from person to person. Similar viruses are spread in cough
        droplets.
      </p>
      <ul>
        <li>
          <SpreadCard
            url="images/icons/icon1.png"
            title="From Close contact with an infected person"
            body="The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another."
          />
        </li>
        <li>
          <SpreadCard
            url="images/icons/icon2.png"
            title="Droplets from infected persons sneezes"
            body="A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes."
          />
        </li>
        <li>
          <SpreadCard
            url="images/icons/icon3.png"
            title="Touching Objects that have cough or sneeze"
            body="The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another."
          />
        </li>
      </ul>
      <div className="questionButton">
        <button>Have Question About Spreading?</button>
      </div>
    </div>
  );
}

export default Spread;
