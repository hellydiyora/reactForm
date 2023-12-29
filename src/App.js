import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 className="First">Welcome to our website</h1>
        <h2 className="Second">notications</h2>
      </div>
      <div className="Container">
        <div className="Navbar">
        <h3 >Menu</h3>
        <h4>Link1</h4>
        <h4>Link2</h4>
        <h4>Link3</h4>
        </div>
        <div className="Card">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;