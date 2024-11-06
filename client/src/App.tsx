import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/homeLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index path='/' element={<div>home</div>} />
          <Route path='/products' element={<div>products</div>} />
          <Route path='/about' element={<div>about</div>} />
          <Route path='/contact' element={<div>contact</div>} />
        </Route>
        <Route path='/home' element={<Button>home</Button>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
