import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" id="header">
      <Link to="/">
        <h3 className="homeLink">Crumby Cucumbers</h3>
      </Link>
    </div>
  );
};

export default Header;
