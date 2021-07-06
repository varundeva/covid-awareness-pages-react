import "./precautions.css";
import PrecautionsCard from "./PrecautionsCard";
function Precautions() {
  return (
    <div className="precautions">
      <div className="precautions-data">
        <h2 className="precautions-title">Prevention & Advice</h2>
        <p className="precaution-body">
          There is currently no vaccine to prevent coronavirus disease 2019. The
          best way to prevent illness is to avoid being exposed to this virus
        </p>
        <div className="precaution-cards">
          <PrecautionsCard
            url="../images/icons/icon7.png"
            title="Avoid Close contact"
            body="Maintain at least 1 metre (6 feet) distance between yourself & anyone
            who is coughing or sneezing. If you are too close, get chance to
            infected."
          />
          <PrecautionsCard
            url="../images/icons/icon8.png"
            title="Clean your hands Often"
            body="Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds"
          />
          <PrecautionsCard
            url="../images/icons/icon9.png"
            title="Stay at home"
            body="Avoid close contact with people who are sick and stay home if you are sick to avoid spreading illness to others."
          />
          <PrecautionsCard
            url="../images/icons/icon10.png"
            title="Cover coughs and sneezes"
            body="Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze."
          />
          <PrecautionsCard
            url="../images/icons/icon11.png"
            title="Wear a facemask if you’re sick"
            body="Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth son that wear facemask."
          />
          <PrecautionsCard
            url="../images/icons/icon12.png"
            title="Clean and disinfect"
            body="Clean and disinfect frequently touched objects and surfaces, such as toys, electronic devices and doorknobs and Immediately dispose of any tissues."
          />
        </div>
      </div>
    </div>
  );
}

export default Precautions;
