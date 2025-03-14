import React, { useState, useEffect } from "react";
import NavBar from "../../common/NavBar/index";
import Footer from "../../common/Footer/index";
import Typography from "../../common/Typography/index";
import useFetch from "../../../hooks/UseFetch";
import { useParams } from "react-router";
import Star from "../../../assets/Icons/Star";
import Button from "../../common/Button/index";
import HeartIcon from "../../../assets/Icons/HeartIcon";
import DeliveryIcon from "../../../assets/Icons/DeliveryIconBlack";
import ReturnDelivery from "../../../assets/Icons/ReturnDelivery";
import Shirt from "../../../assets/Images/Shirt.png";
import Bag from "../../../assets/Images/Bag.png";
import Cooler from "../../../assets/Images/Cooler.png";
import Bookshelf from "../../../assets/Images/Bookshelf.png";
import ProductCard from "../../common/BestSellingCard/index";

const ProductsDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes/${id}`
  );

  const rating = data?.rating || { rate: 0, count: 0 };
  const stars = Math.round(rating.rate);
  const isInStock = data?.stock > 0;
  const [count, setCount] = useState(0);
  const imgs = [
    { id: 0, value: data.image },
    { id: 1, value: Cooler },
    { id: 2, value: Bookshelf },
    { id: 3, value: Shirt },
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (data?.image) {
      setSelectedImage(data.image);
    }
  }, [data]);

  const handleClick = (index) => {
    setSelectedImage(imgs[index].value);
  };

  return (
    <>
      <NavBar />


      <section className="max-w-[1170px] mx-auto px-4 mt-10 mb-8">
        <div>
          <Typography variant="p" className="my-16 text-[0.9rem] font-medium"><span className="text-gray-400">Account / Gaming /</span> {data.title} </Typography>
        </div>

        {/* Top section */}
        <div className="flex gap-12">
          {/* Left section */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-4 rounded">
              {imgs.map((item, i) => (
                <div
                  key={item.id}
                  className="bg-gray-300 h-[138px] rounded w-[170px] flex items-center justify-center cursor-pointer"
                  onClick={() => handleClick(i)}
                >
                  <img
                    src={item.value}
                    alt="Thumbnail"
                    className="h-[114px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gray-300 h-[600px] w-[500px] rounded flex items-center justify-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Product"
                  className="h-[315px] w-[20rem] object-contain"
                />
              )}
            </div>
          </div>

          {/* Right section */}
          <div>
            <Typography variant="h5" className="font-bold">
              {data?.title}
            </Typography>

            <div className="flex items-center gap-2 mt-2 ">
              <div className="flex">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-gray-500">({rating.rate})</p>
              <p className="text-sm text-gray-500">{rating.count} reviews</p>
              <p
                className={`mt-2 text-sm pl-3 font-semibold ${
                  isInStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {isInStock ? " | In Stock" : " | Out of Stock"}
              </p>
            </div>

            <Typography variant="h5" className="font-medium">
              ${data?.price}.00
            </Typography>

            <Typography variant="p" className="text-[0.8rem] mt-4">
              {data?.description}.
            </Typography>

            <div className="w-full h-0.5 bg-gray-300 rounded mt-5"></div>

            <div className="flex items-center gap-3  mt-4">
              <Typography variant="p" className="text-[1rem]">
                Colors :
              </Typography>

              <div className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer  hover:border-black hover:border-2"></div>
              <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer  hover:border-black hover:border-2"></div>
            </div>

            <div className="flex items-center gap-3  mt-4">
              <Typography variant="p" className="text-[1rem] ">
                Size :
              </Typography>
              <div className="px-3 py-0.5 border-1 border-black rounded-md cursor-pointer hover:bg-[#DB4444] hover:text-white">
                S
              </div>
              <div className="px-3 py-0.5 border-1 border-black rounded-md cursor-pointer hover:bg-[#DB4444] hover:text-white">
                M
              </div>
              <div className="px-3 py-0.5 border-1 border-black rounded-md cursor-pointer hover:bg-[#DB4444] hover:text-white">
                L
              </div>
              <div className="px-3 py-0.5 border-1 border-black rounded-md cursor-pointer hover:bg-[#DB4444] hover:text-white">
                XL
              </div>
            </div>

            {/* quantity  */}

            <div className="mt-4 flex justify-between">
              <div className="flex  gap-4 border-1  border-black">
                <button
                  className="font-bold text-2xl border-r-1 px-4 border-black cursor-pointer"
                  onClick={() =>
                    setCount((prev) => {
                      if (prev > 0) return prev - 1;
                      else return (prev = 0);
                    })
                  }
                >
                  -
                </button>
                <p className="flex items-center px-4">{count}</p>
                <button
                  className="font-bold text-2xl border-l pl-3 pr-3 border-black cursor-pointer bg-[#DB4444] text-white"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <Button className="px-13 cursor-pointer">Buy Now</Button>

              <div className="border border-black p-2 rounded">
                <HeartIcon />
              </div>
            </div>

            <div className="mt-10 border-2 rounded border-gray-400 ">
              <div className="flex gap-5  p-5">
                <div>
                  <DeliveryIcon />
                </div>
                <div>
                  <Typography variant="h4" className="font-semibold">
                    Free Delivery
                  </Typography>
                  <button className="underline font-medium cursor-pointer text-[0.8rem]">
                    Enter your postal code for Delivery Availability
                  </button>
                </div>
              </div>
              <div className="flex gap-6 border-t-2 border-gray-400 p-5">
                <div>
                  <ReturnDelivery />
                </div>
                <div>
                  <Typography variant="h4" className="font-semibold">
                    Return Delivery
                  </Typography>
                  <Typography
                    variant="p"
                    className="font-semibold text-[0.8rem]"
                  >
                    Free 30 Days Delivery Returns.{" "}
                    <button className="underline cursor-pointer">
                      Details
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[7rem]">
          <div className="flex gap-2 items-center">
            <Typography variant="before"></Typography>
            <Typography variant="p" className="text-[#DB4444] font-semibold">
              Realted Items
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            <ProductCard
              image={Shirt}
              title="The North Coat"
              price={260}
              rating={5}
              reviews={65}
            />
            <ProductCard
              image={Bag}
              title="The North Coat"
              price={180}
              rating={4}
              reviews={65}
            />
            <ProductCard
              image={Cooler}
              title="The North Coat"
              price={400}
              rating={4.5}
              reviews={65}
            />
            <ProductCard
              image={Bookshelf}
              title="The North Coat"
              price={190}
              rating={4}
              reviews={65}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsDetailPage;
