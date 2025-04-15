import "../../styles/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <div>
            <a href="" className="nav-button">
              1
            </a>
            <a href="" className="nav-button">
              2
            </a>
            <a href="" className="nav-button">
              2
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
