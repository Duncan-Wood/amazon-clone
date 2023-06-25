import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
