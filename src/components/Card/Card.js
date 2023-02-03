import "./Card.css";

const Card = ({ poster, id, alt, handleClick}) => {
  return (
    <div className="main-board" onClick={handleClick}>
      <img className="poster" src={poster} id={id} alt={alt}></img>
    </div>
  );
};

export default Card;
