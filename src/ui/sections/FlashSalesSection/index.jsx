import React from "react";
import Typography from "../../../ui/common/Typography/index";
import SemiColonIcon from "../../../assets/Icons/SemiColonIcon";
import LeftArrowTail from "../../../assets/Icons/LeftArrowTail";
import RightArrowTail from "../../../assets/Icons/RightArrowTail ";
import Products from "../../common/Products/index";
import Button from "../../common/Button/index";
import TopSection from "../../common/TopSection/index";
import "./style.css";
const FlashSales = () => {
  return (
    <>

      <section className="w-full max-w-[1170px] mx-auto mt-28 px-4 md:px-8 border-b border-gray-300">
        <div className="w-full max-w-[1170px] mx-auto">
          <div className="flex gap-2 items-center">
            <Typography variant="before"></Typography>
            <Typography variant="p" className="text-[#DB4444] font-semibold">
              Today’s
            </Typography>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
              <Typography variant="h2" className="font-semibold mt-5">
                Flash Sales
              </Typography>


              <div className="flex items-center gap-2 md:gap-4 timer-container mt-4 md:mt-0">
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Days
                  </Typography>
                  <Typography variant="h2" className="font-semibold">
                    03
                  </Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Hours
                  </Typography>
                  <Typography variant="h2" className="font-semibold">
                    23
                  </Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Minutes
                  </Typography>
                  <Typography variant="h2" className="font-semibold">
                    19
                  </Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Seconds
                  </Typography>
                  <Typography variant="h2" className="font-semibold">
                    56
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4 md:mt-0">
              <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full">
                <LeftArrowTail />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full">
                <RightArrowTail />
              </div>
            </div>
          </div>

          <Products />
          <div className="flex justify-center mb-9">
            <Button>View All Products</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSales;
