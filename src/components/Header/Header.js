import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">HOME</Link>
      <p>this is a header</p>
    </div>
  );
};

export default Header;

