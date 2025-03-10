import React, { useEffect, useState } from "react";
import Typography from "../../../ui/common/Typography/index";
import SemiColonIcon from "../../../assets/Icons/SemiColonIcon";
import LeftArrowTail from "../../../assets/Icons/LeftArrowTail";
import RightArrowTail from "../../../assets/Icons/RightArrowTail ";
import Products from "../../common/Products/index";
import Button from "../../common/Button/index";
import "./style.css";

const FlashSales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;
  const totalProducts = 25; 

  const nextSlide = () => {
    if (currentIndex < totalProducts - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const deadline = new Date("March 18, 2025").getTime();

  const updateTime = () => {
    const now = Date.now();
    const timeDiff = deadline - now;

    if (timeDiff > 0) {
      setTimeLeft({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((timeDiff / (1000 * 60)) % 60),
        secs: Math.floor((timeDiff / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 }); 
    }
  };

  useEffect(() => {
    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); 
  }, []);
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
                  <Typography variant="h2" className="font-semibold">{timeLeft.days<10?"0"+timeLeft.days:timeLeft.days}</Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Hours
                  </Typography>
                  <Typography variant="h2" className="font-semibold">{timeLeft.hours<10?"0"+timeLeft.hours:timeLeft.hours}</Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Minutes
                  </Typography>
                  <Typography variant="h2" className="font-semibold">{timeLeft.mins<10?"0"+timeLeft.mins:timeLeft.mins}</Typography>
                </div>
                <SemiColonIcon />
                <div>
                  <Typography variant="p" className="text-[0.8rem]">
                    Seconds
                  </Typography>
                  <Typography variant="h2" className="font-semibold">{timeLeft.secs<10?"0"+timeLeft.secs:timeLeft.secs}</Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4 md:mt-0">
              <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
                <button onClick={prevSlide}>
                  <LeftArrowTail className="cursor-pointer"/>
                </button>
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
                <button onClick={nextSlide}>
                  <RightArrowTail className="cursor-pointer"/>
                </button>
              </div>
            </div>
          </div>

          <Products currentIndex={currentIndex} />

          <div className="flex justify-center mb-9">
            <Button>View All Products</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSales;
