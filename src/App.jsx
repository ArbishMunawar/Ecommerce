import { Route, Routes } from "react-router";
import Homepage from "./ui/pages/HomePage/index";
import ProductsPage from './ui/pages/ProductsPage/index'
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={  <Homepage />}/>
      <Route path="/ProductsPage" element={  <ProductsPage />}/>
      </Routes>
    </>
  );
}

export default App;
