import "./style.scss";
import logo from "../../assets/logo.png";
import { Language } from "../Language";
import { Link } from "react-router-dom";
export const Navbar = ({ showActions=true }) => {
  return (
    <div className="navBar">
      <img src={logo} alt="..." />
      {showActions && (
        <div>
          <Language />
          <Link to="/signin" className="signIn">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};
