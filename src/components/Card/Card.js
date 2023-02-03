import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ poster, id, alt, handleClick }) => {
    return (
        <div className="main-board" onClick={handleClick}>
            <Link to={`/details/${id}`}>
                <img className="poster" src={poster} id={id} alt={alt}></img>
            </Link>
        </div>
    );
};

export default Card;
