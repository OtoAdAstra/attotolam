import "../../styles/navbar.css";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
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
  const isSmall = windowWidth <= 685;

  //Scroll to section
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <div>
              {isSmall ? (
                <RxHamburgerMenu
                  className="hamburger"
                  size={30}
                  onClick={toggleMenu}
                />
              ) : (
                <>
                  <button
                    className="nav-button"
                    onClick={() => scrollToId("aboutus")}>
                    about us
                  </button>
                  <button
                    className="nav-button"
                    onClick={() => scrollToId("services")}>
                    services
                  </button>
                  <button
                    className="nav-button"
                    onClick={() => scrollToId("contact")}>
                    Contact
                  </button>
                </>
              )}
            </div>
          </li>
        </ul>
      </nav>
      {isOpen && <ResponsiveNav setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
