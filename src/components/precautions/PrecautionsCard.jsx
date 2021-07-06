import "./precautions.css";

export default function PrecautionsCard(props) {
  return (
    <div className="precautions-card">
      <div className="precaution-card-content">
        <img src={props.url} className="precautionscard-image" alt="" />
        <h2 className="precautionscard-title">{props.title}</h2>
        <p className="precautionscard-body">{props.body}</p>
      </div>
    </div>
  );
}
