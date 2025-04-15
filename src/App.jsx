import "./styles/App.css";
import Navbar from "./assets/components/Navbar";
import Welcome from "./assets/components/Welcome";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="grey-background">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
