import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from "./components/ProductCard/Product";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleCartCount = (actionType) => {
    console.log(actionType);
    // setCartCount(cartCount + 1);
    setCartCount((prevCartCount) => {
      return actionType === "add" ? prevCartCount + 1 : prevCartCount - 1;
    });
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Header />
      <Product handleCartCount={handleCartCount} />
      <Footer />
    </div>
  );
}

export default App;
