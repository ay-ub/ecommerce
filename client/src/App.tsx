import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "@/layouts/HomeLayout";
import "./App.css";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProductDetails from "@/pages/ProductDetails";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products/:productId' element={<ProductDetails />} />
        </Route>
        <Route path='/dashboard' element={<Button>dashboard</Button>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
