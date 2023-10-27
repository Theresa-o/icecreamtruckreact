import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Shop from "./pages/shop/shop";
import Order from "./pages/order/order";
import Product from "./pages/product/product";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Hero />
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

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import component
// import Navbar from "./components/navbar";
// import Header from "./components/header";
// import Footer from "./components/footer";

// //import pages
// import ProductDetails from "./pages/ProductDetails";
// import Shop from "./pages/shop/shop";
// import Order from "./pages/order/order";
// import Product from "./pages/product/product";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <Router>
//           <Header />
//           <Routes>
//             <Route exact path="/" element={<Shop />} />
//             <Route path="/fooditem/:id" element={<ProductDetails />} />
//             {/* <Route path="/order" element={<Order />} /> */}
//           </Routes>
//           <Footer />
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;

//
