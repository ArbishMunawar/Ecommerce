import { Route, Routes } from "react-router";
import Homepage from "./ui/pages/HomePage/index";
// import { Link } from "react-router";
import ProductsPage from "./ui/pages/ProductsPage/index";
import ProductsDetailsPage from "./ui/pages/ProductsDetailsPage/index";
import CartPage from "./ui/pages/CartPage/index";
import { useState,useEffect } from "react";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/homes/:id" element={<ProductsDetailsPage />} />
        <Route path="/CartPage" element={<CartPage/>} />
      </Routes>
        {/* // <Link to="/ProductsDetailsPage/:id">{<ProductsDetailsPage/>}</Link>; */}
    </>
  );
}

export default App;
  


// pnpx json-server --watch db.json --port 3000