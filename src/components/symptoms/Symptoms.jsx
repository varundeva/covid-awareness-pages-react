import SymptomsCard from "./SymtomsCard";
import "./symptoms.css";
function Symptoms() {
  return (
    <div className="symptoms">
      <div className="symptoms-contents">
        <h5 className="small-text">WHAT ARE THE SYMPTOMS?</h5>

        <h2 className="title">Symptoms of Corona Virus</h2>
        <p className="body-text">
          Symptoms may take up to 14 days to appear after exposure to COVID-19.
          This is the longest known incubation period for this disease.
        </p>
        <div className="symptoms-card-grid">
          <SymptomsCard
            url="../images/icons/icon4.png"
            title="High Fever"
            body="Continuous cough – this means coughing a lot for more than an hour, or 3
        or more coughing episodes in 24 hours (if you usually have a cough, it
        may be worse than usual)."
          />
          <SymptomsCard
            url="../images/icons/icon5.png"
            title="Coughing"
            body="Continuous cough – this means coughing a lot for more than an hour, or 3
        or more coughing episodes in 24 hours (if you usually have a cough, it
        may be worse than usual)."
          />
          <SymptomsCard
            url="../images/icons/icon6.png"
            title="Shortness of breath"
            body="Continuous cough – this means coughing a lot for more than an hour, or 3
        or more coughing episodes in 24 hours (if you usually have a cough, it
        may be worse than usual)."
          />
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
