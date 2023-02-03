import "./Card.css";

const Card = ({ poster, id }) => {
  return (
    <div className="main-board">
      <img className="poster" src={poster} id={id} alt=""></img>
    </div>
  );
};

export default Card;
