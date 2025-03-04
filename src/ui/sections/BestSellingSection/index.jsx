
import React from "react";
import TopSection from "../../common/TopSection/index";
import Shirt from "../../../assets/Images/Shirt.png";
import Bag from "../../../assets/Images/Bag.png";
import Cooler from "../../../assets/Images/Cooler.png";
import Bookshelf from "../../../assets/Images/Bookshelf.png";
import ProductCard from "../../common/BestSellingCard/index";

const BestSelling = () => {
  return (
    <section className="max-w-[1170px] mx-auto px-4 mt-10 mb-8 ">
      <TopSection title="Best Selling Products" subtitle="This Month" className="mb-6 text-center" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard image={Shirt} title="The North Coat" price={260} rating={5} reviews={65} />
        <ProductCard image={Bag} title="Elegant Bag" price={180} rating={4} reviews={40} />
        <ProductCard image={Cooler} title="Cooling System" price={400} rating={4.5} reviews={75} />
        <ProductCard image={Bookshelf} title="Modern Bookshelf" price={190} rating={4} reviews={50} />
      </div>
    </section>
  );
};

export default BestSelling;
