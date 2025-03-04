
import React from "react";
import Typography from "../../common/Typography/index"; 
import Star from "../../../assets/Icons/Star.jsx";
import EyeIcon from "../../../assets/Icons/EyeIcon.jsx";
import HeartIcon from "../../../assets/Icons/HeartIcon.jsx";

const ProductCard = ({ image, title, price, rating, reviews }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg">
      <div className="bg-gray-100 flex justify-center p-4 rounded-md relative">
        <img src={image} alt={title} className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />
        
        <div className="bg-white rounded-full absolute top-3 right-3 p-1">
          <HeartIcon />
        </div>
        <div className="bg-white rounded-full absolute top-14 right-3 p-1.5">
          <EyeIcon />
        </div>
      </div>

      <div className="mt-3 text-center md:text-left">
        <Typography variant="h6" className="font-bold">{title}</Typography>
        <Typography variant="p" className="text-red-500 font-semibold">${price}</Typography>

        <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
          <div className="flex">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <Star key={i} />
            ))}
          </div>
          <Typography variant="p" className="text-gray-500">({reviews})</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
