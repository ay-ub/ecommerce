import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "@/layouts/HomeLayout";
import "./App.css";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProductDetails from "@/pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { DashboardLayout } from "./layouts/DashboardLayout";
import SalesStatistics from "./pages/Dashboard/SalesStatistics";
import ProductList from "./pages/Dashboard/ProductList";
import CreateProduct from "./pages/Dashboard/CreateProduct";
import CustomerList from "./pages/Dashboard/CustomerList";
import Orders from "./pages/Dashboard/Orders";
import GeneralSettings from "./pages/Dashboard/GeneralSettings";
import Categories from "./pages/Dashboard/Categories";
import AlertPage from "./pages/Dashboard/AlertPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ThemeProvider } from "./components/theme-provider";
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
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
              <DashboardLayout />
            </ThemeProvider>
          }
        >
          <Route path='sales-statistics' element={<SalesStatistics />} />
          <Route
            path='order-summary'
            element={<div>Page for order-summary</div>}
          />
          <Route path='alerts' element={<AlertPage />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customer-list' element={<CustomerList />} />
          <Route path='categories' element={<Categories />} />
          {/* <Route path='Content' element={<div>Page for Content</div>} /> */}

          <Route path='general-settings' element={<GeneralSettings />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
