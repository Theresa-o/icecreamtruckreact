import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Order from "./pages/order/order";
import Product from "./pages/product/product";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/fooditem/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
