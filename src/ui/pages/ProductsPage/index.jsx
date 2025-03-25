import React, { useState } from "react";
import useFetch from "../../../hooks/UseFetch";
import Card from "../../common/Card/index";

const ProductsPage = ({ setProductId  }) => {
  const { data } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes`
  );
  
  const [search, setSearch] = useState();
  const [filtered, setFiltered] = useState([]);
  const handleSearch = () => {
    if (!data) return;
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filtered);
  };


const[cart,setCart]=useState([]);

const handleClick=(item)=>{
  setCart((prevCart) => [...prevCart, item]);  
  console.log("Cart Updated:", cart);
  
}
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <div className="flex gap-3 items-center mb-6">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-lg   "
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#DB4444] text-white rounded-lg hover:bg-red-600 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map(({ id, ...product }) => (
            <Card key={id} {...product} setProductId={setProductId} handleClick={handleClick}/>
          ))
        ) : (
          <p className="text-gray-300">
            Search here for products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
