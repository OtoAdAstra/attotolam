import { useState } from "react";
import "../../styles/responsive-nav.css";
import { IoCloseOutline } from "react-icons/io5";

const ResponsiveNav = ({ setOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  //Close menu
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  //Scroll to section
  const scrollToId = (id) => {
    handleClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`burger-nav ${isClosing ? "slide-out" : "slide-in"}`}>
      <button onClick={handleClose} className="burger-close">
        <IoCloseOutline size={40} />
      </button>{" "}
      <button onClick={() => scrollToId("aboutus")}>About us</button>
      <button onClick={() => scrollToId("services")}>Services</button>
      <button onClick={() => scrollToId("contact")}>Contact</button>
    </div>
  );
};

export default ResponsiveNav;
