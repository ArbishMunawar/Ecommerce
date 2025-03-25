import React from "react";
import NavBar from "../../common/NavBar/index";
import Footer from "../../common/Footer/index";
import useFetch from "../../../hooks/UseFetch";

const CartPage = ({ cart }) => {
  const { data } = useFetch(`${import.meta.env.VITE_REACT_APP_API_URL}/homes`);
  return (
    <>
      <NavBar />
      <div>Cart</div>
      <Footer />
    </>
  );
};
export default CartPage;