import React from "react";
import Typography from "../../common/Typography/index";
import DownArrow from "../../../assets/Icons/DownArrow";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import HeartIcon from "../../../assets/Icons/HeartIcon";
import CartIcon from "../../../assets/Icons/CartIcon";
import MenuIcon from "../../../assets/Icons/MenuIcon";
import { Link } from "react-router";
import { useState } from "react";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black w-full  border border-b-[#F5F5F5]">
        <div className="h-auto max-w-[1170px] mx-auto flex flex-col md:flex-row items-center justify-between py-2 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <Typography
              variant="h6"
              className="text-white text-[0.75rem] sm:text-[0.8rem] font-extralight text-center sm:text-left"
            >
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Typography>
            <a
              href=""
              className="text-white underline text-[0.75rem] sm:text-[0.8rem] font-semibold"
            >
              Shop Now
            </a>
          </div>

          <div className="mt-2 md:mt-0">
            <Typography
              variant="h6"
              className="text-white flex items-center text-[0.8rem] sm:text-[0.9rem] font-extralight"
            >
              English <DownArrow />
            </Typography>
          </div>
        </div>
      </div>

      <nav className="border-b-1 border-b-[#e4e1e1]">
        <div className="max-w-[1170px] mx-auto p-4">
          <div className="flex justify-between md:gap-2 items-center ">
            <Typography variant="h3" className="font-bold">
              Exclusive
            </Typography>
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <div
              className={`md:flex lg:gap-[3rem] md:gap-3 relative items-center ${
                menuOpen
                  ? "flex absoulte sm:gap-1  top-[30%] text-left flex-col "
                  : "hidden"
              }`}
            >
              <a href="/" className="text-black">
                Home
              </a>
              <a href="#our-mission" className="text-black">
                About
              </a>
              <a href="#find-a-home" className="text-black">
                Contact
              </a>
              <a href="#testimonials" className="text-black">
                Sign Up
              </a>
              <a
                href="#" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/ProductsPage";
                }}
                className="text-black"
              >
                Products
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex items-center w-full md:w-64 px-4 py-2 bg-[#F5F5F5] border border-gray-300 rounded-md">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="focus:outline-none text-[0.8rem] w-full bg-transparent"
                />
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>

              <div className="flex gap-3">
                <HeartIcon className="w-6 h-6 text-black cursor-pointer" />
                <Link to={`/CartPage`}>
                <CartIcon className="w-6 h-6 text-black cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
