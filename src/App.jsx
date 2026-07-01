import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Office from "./Components/Office";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/Productdetails";
import Contact from "./Components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Products />
      <Office />
      <Contact/>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;