import "./styles/App.css";
import Navbar from "./assets/components/Navbar";
import Welcome from "./assets/components/Welcome";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
