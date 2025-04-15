import "./styles/app.css";
import Navbar from "./assets/components/Navbar";
import Welcome from "./assets/components/Welcome";
import Aboutus from "./assets/components/Aboutus";
import Services from "./assets/components/Services";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Aboutus />
      <Services />
      <Contact />
      <footer>copyright © 2024 all rights reserved</footer>
    </div>
  );
}

export default App;
