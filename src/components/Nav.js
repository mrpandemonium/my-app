import "../App.css";
import logo from "../Images/Logo.svg";

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <ul className="list">
        <li>
          <a href="/Header">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Menu">Menu</a>
        </li>
        <li>
          <a href="/Reservations">Reservations</a>
        </li>
        <li>
          <a href="/Order">Order Online</a>
        </li>
        <li>
          <a href="/Login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
