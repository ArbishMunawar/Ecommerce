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
  "Woman’s Fashion": [Womenfashion, MensFahion, elecrtonics],
  "Men’s Fashion": [MensFahion, Womenfashion, elecrtonics],
  Electronics: [elecrtonics, Womenfashion, MensFahion],
  "Home & Lifestyle": [HomeImage, elecrtonics, MensFahion],
  Medicine: [medicine,Womenfashion, medicine],
  Outdoor: [outdoor, elecrtonics, outdoor],
  "Baby’s & Toys": [baby, elecrtonics, baby],
  "Groceries & Pets": [pets, outdoor, pets],
  "Health & Beauty": [beauty, HomeImage, beauty]
};
const Homepage = ({ setProductId }) => {
  const [category, setCategory] = useState("Home & Lifestyle");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCategoryClick = (key) => {
    setCategory(key);
    setSelectedIndex(0); 
  };
  return (
    <>
      <NavBar />
    
      <section className="max-w-[1170px] mx-auto flex container justify-between">
        {/* Left Sidebar */}
        <div className="relative w-[20rem] border-r pt-8 border-r-[#e4e1e1] pr-8 cursor-pointer">
          {Object.keys(Categories).map((key) => (
            <div
              key={key}
              onClick={() => handleCategoryClick(key)}
              className="flex justify-between pb-3 cursor-pointer"
            >
              <Typography variant="p">{key}</Typography>
              <LeftArrow />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="h-[300px] w-full flex items-center justify-center  rounded">
            <img
              src={Categories[category][selectedIndex]}
              alt={category}
              className="h-[280px] w-auto object-contain rounded"
            />
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {Categories[category].map((_, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border border-black rounded-full w-3 h-3 cursor-pointer ${
                  selectedIndex === index ? "bg-red-600" : "bg-gray-600"
                }`}
              ></div>
            ))}

          </div>
        </div>
      </section>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <EnhanceMusicExperience />
      <ExploreProducts setProductId={setProductId}/>
      <NewArrival />
      <Testimonial />
      <Footer />
    </>
  );
};
export default Homepage;
