import "./symptoms.css";

function SymptomsCard(props) {
  return (
    <div className="symptoms-card">
      <img src={props.url} alt="" className="symptoms-img" />
      <h3 className="symptoms-title">{props.title}</h3>
      <p className="symptoms-body">{props.body}</p>
    </div>
  );
}

export default SymptomsCard;
