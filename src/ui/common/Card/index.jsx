import React from "react";
import EyeIcon from "../../../assets/Icons/HeartIcon.jsx";
import HeartIcon from "../../../assets/Icons/EyeIcon.jsx";
import Star from "../../../assets/Icons/Star.jsx";
import { Link } from "react-router";

const Card = ({id, title, price, description, rating, image }) => { 
  // console.log("Card ID:", id); 
  const stars = Math.round(rating?.rate || 0);   

  return (
    // <Link to={`/homes/${id}`}>
    <Link to={`/homes/${id}`}>
    <div className="relative">
      <div className="p-4 w-[15rem] rounded-lg bg-[#F5F5F5]">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain rounded"
        />
        <div className="bg-white rounded-full absolute top-3 p-1 right-[6%]">
          <HeartIcon />
        </div>
        <div className="bg-white rounded-full absolute top-[12%] p-1 right-[6%]">
          <EyeIcon />
        </div>
      </div>
                                                                    
      <div className="p-4 w-[15rem] rounded-lg">    
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p className="text-md font-semibold mt-1">${price}</p>

        

        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {Array.from({ length: stars }, (_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-500">({rating?.rate || "0.0"})</p>
          <p className="text-sm text-gray-500">{rating?.count} reviews</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;

