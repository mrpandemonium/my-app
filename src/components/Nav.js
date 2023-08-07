import "../App.css";
import { Link } from "react-router-dom";
import logo from "../Images/Logo.svg";

function Nav() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul className="list">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/booking">Reservations</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
