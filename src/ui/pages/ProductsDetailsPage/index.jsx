import React from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../../common/NavBar/index";
import Footer from "../../common/Footer/index";
// import Typography from "../../common/Typography/index";
import useFetch from "../../../hooks/UseFetch";

const ProductsDetailPage = () => {
  const { id } = useParams(); 
  console.log("Details Page ID:", id);
  const { data,isLoading,error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes/${id}` 
  );
  

  return (
    <>
      <NavBar />
      <section className="max-w-[1170px] mx-auto px-4 mt-10 mb-8">
       
      <h1>{data?.title || "No Title "}</h1>
      </section>
      <Footer/>
    </>
  );
};

export default ProductsDetailPage;
