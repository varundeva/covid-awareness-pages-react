import "./spread.css";

function SpreadCard(props) {
  return (
    <div className="spreadCard">
      <img className="spreadCardImg" src={props.url} alt="" />
      <h4 className="spreadCardTitle">{props.title}</h4>
      <p className="spreadCardBody">{props.body}</p>
    </div>
  );
}

export default SpreadCard;
