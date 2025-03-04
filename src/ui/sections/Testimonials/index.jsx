import React from "react";
import Typography from "../../common/Typography/index";
import DeliveryIcon from "../../../assets/Icons/DeliveryIcon";
import CustomerService from "../../../assets/Icons/CustomerService";
import MoneyBack from "../../../assets/Icons/MoneyBack";

const Testimonial = () => {
  return (
    <section className="w-full max-w-[1170px] mx-auto mt-28 px-4 md:px-8 mb-14 flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-12">
      <div className="flex items-center flex-col text-center max-w-sm">
        <div className="bg-gray-300 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
          <div className="bg-black h-[3.5rem] w-[3.5rem] rounded-full flex justify-center items-center">
            <DeliveryIcon />
          </div>
        </div>
        <Typography variant="h5" className="font-bold pt-3">
          FREE AND FAST DELIVERY
        </Typography>
        <Typography variant="p" className="font-light">
          Free delivery for all orders over $140
        </Typography>
      </div>

      <div className="flex items-center flex-col text-center max-w-sm">
        <div className="bg-gray-300 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
          <div className="bg-black h-[3.5rem] w-[3.5rem] rounded-full flex justify-center items-center">
            <CustomerService />
          </div>
        </div>
        <Typography variant="h5" className="font-bold pt-3">
          24/7 CUSTOMER SERVICE
        </Typography>
        <Typography variant="p" className="font-light">
          Friendly 24/7 customer support
        </Typography>
      </div>


      <div className="flex items-center flex-col text-center max-w-sm">
        <div className="bg-gray-300 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
          <div className="bg-black h-[3.5rem] w-[3.5rem] rounded-full flex justify-center items-center">
            <MoneyBack />
          </div>
        </div>
        <Typography variant="h5" className="font-bold pt-3">
          MONEY BACK GUARANTEE
        </Typography>
        <Typography variant="p" className="font-light">
          We return money within 30 days
        </Typography>
      </div>
    </section>
  );
};

export default Testimonial;
