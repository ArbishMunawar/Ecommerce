import React, { useState } from "react";
import NavBar from "./../../common/NavBar/index";
import Typography from "../../common/Typography";
import LeftArrow from "../../../assets/Icons/LeftArrow";
import HomeImage from "../../../assets/Images/Frame560.png";
import elecrtonics from "../../../assets/Images/elecrtonics.jpeg";
import MensFahion from "../../../assets/Images/MensFahion.jpg";
import Womenfashion from "../../../assets/Images/Womenfashion.jpg";
import medicine from "../../../assets/Images/medicine.jpeg";
import beauty from "../../../assets/Images/beauty.jpeg";
import outdoor from "../../../assets/Images/outdoor.jpeg";
import pets from "../../../assets/Images/pets.jpeg";
import baby from "../../../assets/Images/baby.jpeg";
import FlashSales from "../../sections/FlashSalesSection/index";
import BrowseByCategory from "../../sections/CategorySection/index";
import BestSelling from "../../sections/BestSellingSection/index";
import EnhanceMusicExperience from "../../sections/EnhaceExperienceSection/index";
import ExploreProducts from "../../sections/ExploreProducts/index";
import NewArrival from "../../sections/NewArrival/index";
import Testimonial from "../../sections/Testimonials";
import Footer from "../../common/Footer/index";
import "./index.css";

const Categories = {
  "Woman’s Fashion": Womenfashion,
  "Men’s Fashion": MensFahion,
  Electronics: elecrtonics,
  "Home & Lifestyle": HomeImage,
  Medicine: medicine,
  Outdoor: outdoor,
  "Baby’s & Toys": baby,
  "Groceries & Pets": pets,
  "Health & Beauty": beauty,
};
const Homepage = () => {
  const [category, setCategory] = useState("Home & Lifestyle");

  return (
    <>
      <NavBar />
      <section className="max-w-[1170px] mx-auto flex  container ">
        <div className=" flex-grow border-r-1 pt-8 border-r-[#e4e1e1] pr-8 left-container cursor-pointer">

          <div className="absolute bottom-75 right-100">
            <div className="flex justify-center mt-4">
              {Object.keys(Categories).map((key, index) => (
                <div
                  key={index}
                  onClick={() => setCategory(key)}
                  className={`border-1 border-black rounded-full w-3.5 h-3.5 mx-1 cursor-pointer ${
                    category === key ? "bg-red-500" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {Object.keys(Categories).map((key, value) => (
            <div
              key={key}
              onClick={() => setCategory(key)}
              className="flex justify-between pb-3"
            >
              <Typography variant="p">{key}</Typography>
              <LeftArrow />
            </div>
          ))}
        </div>

        <div className="pl-8 pt-8 right-container">
          {category && (
            <img src={Categories[category]} alt={category} className="" />
          )}
        </div>
      </section>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <EnhanceMusicExperience />
      <ExploreProducts />
      <NewArrival />
      <Testimonial />
      <Footer />
    </>
  );
};
export default Homepage;
