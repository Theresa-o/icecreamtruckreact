import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Hero />
          <Routes>
            <Route exact path="/" element={<Shop />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
