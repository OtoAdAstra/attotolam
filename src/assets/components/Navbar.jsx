import "../../styles/Navbar.css";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  //Mobile settings
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  }

  const windowWidth = useWindowWidth();
  const isSmall = windowWidth <= 985;

  return (
    <nav className="nav">
      <ul>
        <li>
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <div>
            <button className="nav-button">about us</button>
            <button className="nav-button">services</button>
            <button className="nav-button">{isSmall.toString()}</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
