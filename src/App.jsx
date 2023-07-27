import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import ProductDetails from "./Components/Product/ProductDetails";
import Cart from "./Components/Cart/Cart.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
