import React from "react";
import EyeIcon from "../../../assets/Icons/HeartIcon.jsx";
import HeartIcon from "../../../assets/Icons/EyeIcon.jsx";
import Star from "../../../assets/Icons/Star.jsx";
import { Link } from "react-router";
import Button from "../Button/index.jsx";

const Card = ({ id, title, price, description, rating, image,handleClick }) => {
  const stars = Math.round(rating?.rate || 0);

  return (
    <div className="relative shadow-lg rounded">
      <Link to={`/homes/${id}`}>
        <div className="p-4 w-[15rem] rounded-lg">
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
      </Link>

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

      <div
        className="flex justify-center w-full cursor-pointer"
        onClick={() => handleClick({ id, title, price, image })}
      >
        <Button className="bg-black w-full cursor-pointer">Add to cart</Button>
      </div>
    </div>
  );
};

export default Card;
