import React from 'react'
import Typography from "../Typography/index";
import LeftArrowTail from "../../../assets/Icons/LeftArrowTail";
import RightArrowTail from "../../../assets/Icons/RightArrowTail ";
const TopSection = ({className="",title = "Flash Sales", subtitle=" Today’s"}) => {
  return (
   <>
  
  <div className=" flex gap-2 items-center todays-container">
            <Typography variant="before"></Typography>
            <Typography variant="p" className="text-[#DB4444] font-semibold">
              {subtitle}
            </Typography>
          </div>

          <div className="flex justify-between Flash-container mb-9">
            <div className="w-[50%] flex justify-between flash">
              <Typography variant="h2" className="font-semibold mt-5">
              {title}
              </Typography>

              
            </div>
            <div className="flex gap-2 items-end arrows-container">
              <div className="h-[2.7rem] w-[2.7rem] flex items-center justify-center bg-[#F5F5F5] rounded-full">
                <LeftArrowTail />
              </div>
              <div className="h-[2.7rem] w-[2.7rem] flex items-center justify-center bg-[#F5F5F5] rounded-full">
                <RightArrowTail />
              </div>
            </div>
          </div>   </>
  )
}

export default TopSection;