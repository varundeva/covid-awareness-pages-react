import "./tracker.css";
import { useState } from "react";
const axios = require("axios").default;
function Tracker() {
  const [activeCase, setActiveCase] = useState("0");
  const [deathCase, setdeathCase] = useState("0");
  const [recoverCase, setrecoverCase] = useState("0");

  const getCaseData = () => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then(function (response) {
        let stateData = response.data.statewise;
        for (let sta in stateData) {
          if (stateData[sta].state === "Karnataka") {
            setActiveCase(
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(stateData[sta].active)
            );
            setdeathCase(
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(stateData[sta].deaths)
            );
            setrecoverCase(
              new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(stateData[sta].recovered)
            );
          }
        }
      });
  };
  getCaseData();
  return (
    <div className="trackerBox">
      <div className="trackerRow">
        <div className="trackerHeading">
          <header>
            <h3>
              See Karnataka's
              <br />
              Covid-19 Counter
            </h3>
          </header>
        </div>

        <div className="trackerCounter">
          <ul>
            <li>
              <strong className="caseNumber badgeWarning">{activeCase}</strong>
              <span className="badgeWarning">Active Cases</span>
            </li>
            <li>
              <strong className="caseNumber">{deathCase}</strong>
              <span>Deaths</span>
            </li>
            <li>
              <strong className="caseNumber badgeSuccess">{recoverCase}</strong>
              <span className="badgeSuccess">Recovered</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
