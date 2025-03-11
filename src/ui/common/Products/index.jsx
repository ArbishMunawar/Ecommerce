import React from "react";
import Card from "../Card/index";
import useFetch from "../../../hooks/UseFetch";
import { useSearchParams } from "react-router";

const Products = ({ currentIndex }) => {
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes?${searchParams.toString()}`
  );

  const visibleSlides = 4;
  const translateValue = -(currentIndex * (100 / visibleSlides));
  return (
    <div className="w-full max-w-[1350px] mx-auto mt-10 px-4 overflow-hidden">
      <div
        className="flex gap-6 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : data && data.length > 0 ? (
          data.map(({ id, ...home }) => (
              <Card {...home} key={id} id={id}/>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
