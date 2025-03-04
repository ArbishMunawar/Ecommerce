import React from "react";
import Card from "../Card/index";
import useFetch from "../../../hooks/UseFetch";

const Products = () => {
  const { data, isLoading } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes`
  );

  return (
    <div className="w-full max-w-[1350px] mx-auto mt-10 px-4">
      <div className="flex gap-6 overflow-x-auto sm:overflow-x-hidden lg:overflow-x-scroll scrollbar-hide flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        {isLoading ? (
          <p>Loading...</p>
        ) : data && data.length > 0 ? (
          data.map(({ id, ...home }) => (
            <Card key={id} {...home} className="flex-shrink-0 w-full sm:w-[48%] md:w-[32%] lg:w-auto" />
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default Products;



