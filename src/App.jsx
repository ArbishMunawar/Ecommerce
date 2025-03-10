import { Route, Routes } from "react-router";
import Homepage from "./ui/pages/HomePage/index";
import ProductsPage from './ui/pages/ProductsPage/index'
import ProductsDetailsPage from './ui/pages/ProductsDetailsPage/index'
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={  <Homepage />}/>
      <Route path="/ProductsPage" element={  <ProductsPage />}/>
      <Route path="/homes/:id" element={<ProductsDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
