import React from "react";
import NavBar from "./../../common/NavBar/index";
import Typography from "../../common/Typography";
import LeftArrow from "../../../assets/Icons/LeftArrow";
import HomeImage from "../../../assets/Images/Frame 560.png";
import FlashSales from '../../sections/FlashSalesSection/index'
import BrowseByCategory from '../../sections/CategorySection/index'
import BestSelling from '../../sections/BestSellingSection/index'
import EnhanceMusicExperience from '../../sections/EnhaceExperienceSection/index'
import ExploreProducts from '../../sections/ExploreProducts/index'
import NewArrival from '../../sections/NewArrival/index'
import Testimonial from "../../sections/Testimonials";
import Footer from "../../common/Footer/index";
import "./index.css"
const Homepage = () => {
  return (
    <>
      <NavBar />
      {/* flex-col md:flex-row w-ful */}
      <section className="max-w-[1170px] mx-auto flex  container ">
        {/* left  */}
        {/* w-full md:w-1/3 p-4 md:p-8 */}
        <div className=" flex-grow border-r-1 pt-8 border-r-[#e4e1e1] pr-8 left-container">
          <div className="flex justify-between">
            <Typography variant="p">Woman’s Fashion</Typography>
            <LeftArrow />
          </div>

          <div className="flex justify-between pt-4">
            <Typography variant="p">Men’s Fashion</Typography>
            <LeftArrow />
          </div>

          <Typography variant="p" className="pt-4">Electronics</Typography>
          <Typography variant="p" className="pt-4">Home & Lifestyle</Typography>
          <Typography variant="p" className="pt-4">Medicine</Typography>
          <Typography variant="p" className="pt-4">Outdoor</Typography>
          <Typography variant="p" className="pt-4">Baby’s & Toys</Typography>
          <Typography variant="p" className="pt-4">Groceries & Pets</Typography>
          <Typography variant="p" className="pt-4">Health & Beauty</Typography>
        </div>


        <div className=" pl-8 pt-8   right-container">
         <img src={HomeImage} alt="" className="" />

        </div>
      </section>
      <FlashSales/>
      <BrowseByCategory/>
      <BestSelling/>
      <EnhanceMusicExperience/>
      <ExploreProducts/>
      <NewArrival/>
      <Testimonial/>
      <Footer/>
    </>
  );
};
export default Homepage;




