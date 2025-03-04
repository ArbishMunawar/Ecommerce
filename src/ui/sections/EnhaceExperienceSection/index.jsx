import React from "react";
import Typography from "../../common/Typography/index";
import speaker from "../../../assets/Images/speaker.png";

const EnhanceMusicExperience = () => {
  return (
    <section className="max-w-[1170px] w-full mx-auto mt-20 mb-8 bg-black border-b-1 p-11 pt-14 pb-14 border-gray-300 flex flex-col md:flex-row items-center gap-9">
      <div className="text-center md:text-left">
        <Typography variant="p" className="text-[#00FF66] pb-4">
          Categories
        </Typography>
        <Typography
          variant="h1"
          className="text-white text-4xl md:text-6xl pb-8"
        >
          Enhance Your <br /> Music Experience
        </Typography>

        {/* Countdown Timer - Kept Same */}
        <div className="flex justify-center md:justify-start gap-4">
          <div className="bg-white rounded-full h-[4rem] w-[4rem] p-3 flex items-center justify-center flex-col">
            <Typography variant="h6" className="font-bold">
              23
            </Typography>
            <Typography variant="p" className="font-semibold text-[0.7rem]">
              Hours
            </Typography>
          </div>
          <div className="bg-white rounded-full h-[4rem] w-[4rem] flex items-center justify-center flex-col">
            <Typography variant="h6" className="font-bold">
              5
            </Typography>
            <Typography variant="p" className="font-semibold text-[0.7rem]">
              Days
            </Typography>
          </div>
          <div className="bg-white rounded-full h-[4rem] w-[4rem] flex items-center justify-center flex-col">
            <Typography variant="h6" className="font-bold">
              59
            </Typography>
            <Typography variant="p" className="font-semibold text-[0.7rem]">
              Minutes
            </Typography>
          </div>
          <div className="bg-white rounded-full h-[4rem] w-[4rem] p-3 flex items-center justify-center flex-col">
            <Typography variant="h6" className="font-bold">
              13
            </Typography>
            <Typography variant="p" className="font-semibold text-[0.7rem]">
              Seconds
            </Typography>
          </div>
        </div>

        <button className="bg-[#00FF66] rounded p-2.5 px-9 text-white mt-9">
          Buy Now!
        </button>
      </div>

      <div className="relative rounded-full  bg-transparent ">
        <img
          src={speaker}
          alt=""
          className=" sm:w-64 md:w-80 lg:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default EnhanceMusicExperience;
