import "./Card.css";

const Card = ({ poster, id, alt }) => {
  return (
    <div className="main-board">
      <img className="poster" src={poster} id={id} alt={alt}></img>
    </div>
  );
};

export default Card;
