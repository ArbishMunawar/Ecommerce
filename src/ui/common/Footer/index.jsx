import React from "react";
import Typography from "../../common/Typography/index";
import FooterArrow from "../../../assets/Icons/FooterArrow";
import Facebook from "../../../assets/Icons/Facebook";
import Twitter from "../../../assets/Icons/Twitter";
import Instagram from "../../../assets/Icons/Instagram";
import LinkedIn from "../../../assets/Icons/LinkedIn";
import QrCode from "../../../assets/Images/QrCode.png";
import googlepay from "../../../assets/Images/google-pay.png";
import appstore from "../../../assets/Images/appstore.png";

const Footer = () => {
  return (
    <section className="mx-auto mt-20 pb-12 pt-20 bg-black">
      <div className="mx-auto max-w-[1170px] flex flex-wrap justify-between gap-8 px-4">
        
        <div className="w-full sm:w-[45%] lg:w-auto">
          <Typography variant="h1" className="text-white font-semibold pt-3">
            Exclusive
          </Typography>
          <Typography variant="h3" className="text-white font-medium pt-4">
            Subscribe
          </Typography>
          <Typography variant="p" className="text-white font-light text-[1.3rem] pt-4">
            Get 10% off your first order
          </Typography>
          <div className="border-[0.1rem] border-white text-white flex justify-between p-3 rounded mt-4">
            <input type="search" placeholder="Enter Your Email" className="bg-transparent text-white focus:outline-none w-full" />
            <FooterArrow />
          </div>
        </div>

        <div className="w-full sm:w-[45%] lg:w-auto">
          <Typography variant="h2" className="text-white font-semibold pt-4">
            Support
          </Typography>
          <Typography variant="p" className="text-white font-light text-[1.2rem] pt-3">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </Typography>
          <Typography variant="p" className="text-white font-light text-[1.2rem] pt-3">
            exclusive@gmail.com
          </Typography>
          <Typography variant="p" className="text-white font-light text-[1.2rem] pt-3">
            +88015-88888-9999
          </Typography>
        </div>

        <div className="w-full sm:w-[45%] lg:w-auto">
          <Typography variant="h2" className="text-white font-semibold pt-4">
            Account
          </Typography>
          {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item, index) => (
            <Typography key={index} variant="p" className="text-white font-light text-[1.2rem] pt-3">
              {item}
            </Typography>
          ))}
        </div>

        <div className="w-full sm:w-[45%] lg:w-auto">
          <Typography variant="h2" className="text-white font-semibold pt-4">
            About
          </Typography>
          {["Privacy Policy", "FAQ", "Contact", "Terms Of Use"].map((item, index) => (
            <Typography key={index} variant="p" className="text-white font-light text-[1.2rem] pt-3">
              {item}
            </Typography>
          ))}
        </div>

        <div className="w-full sm:w-[45%] lg:w-auto">
          <Typography variant="h2" className="text-white font-semibold pt-4">
            Download App
          </Typography>
          <Typography variant="p" className="text-gray-300 font-light text-[1rem] pt-3">
            Save $3 with App New User Only
          </Typography>
          <div className="flex gap-3 mt-4">
            <img src={QrCode} alt="QR Code" className="w-[80px] h-[80px]" />
            <div>
              <img src={googlepay} alt="Google Pay" className="mb-3 w-[120px]" />
              <img src={appstore} alt="App Store" className="w-[120px]" />
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
