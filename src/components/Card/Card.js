import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ poster, id, alt, handleClick }) => {
  return (
    <div className="main-board" onClick={handleClick}>
      <Link to={{ pathname: `/details/${id}`, state: { movieId: id } }}>
        <img className="poster" src={poster} id={id} alt={alt}></img>
      </Link>
    </div>
  );
};

export default Card;

Card.propTypes = {
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
