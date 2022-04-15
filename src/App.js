import "./App.css";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <HomePage />
    </div>
  );
}

export default App;
