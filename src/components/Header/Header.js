import "./Header.css";
import { Link } from "react-router-dom";
import homeGif from '../../assets/home.gif'

const Header = () => {
  return (
    <div className="header" id="header">
      <Link to="/">
        <img src={homeGif} className='gif'></img>
      </Link>
      <h1 className="homeLink">CRUMBY CUCUMBERS</h1>
    </div>
  );
};

export default Header;
