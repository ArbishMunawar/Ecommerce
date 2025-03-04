import React from "react";
import Shirt from "../../../assets/Images/Shirt.png";
import Bag from "../../../assets/Images/Bag.png";
import Cooler from "../../../assets/Images/Cooler.png";
import Bookshelf from "../../../assets/Images/Bookshelf.png";
import ProductCard from "../../common/BestSellingCard/index";
import TopSection from "../../common/TopSection/index";
import Button from "../../common/Button/index";

const ExploreProducts = () => {
  return (
    <section className="w-full max-w-[1170px] mx-auto mt-28 px-4 md:px-8 border-b border-gray-300">
      <TopSection
        title="Explore Our Products"
        subtitle="Our Products"
        className="mb-9"
      />

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        <ProductCard image={Shirt} title="The North Coat" price={260} rating={5} reviews={65} />
        <ProductCard image={Bag} title="The North Coat" price={180} rating={4} reviews={65} />
        <ProductCard image={Cooler} title="The North Coat" price={400} rating={4.5} reviews={65} />
        <ProductCard image={Bookshelf} title="The North Coat" price={190} rating={4} reviews={65} />
        <ProductCard image={Shirt} title="The North Coat" price={260} rating={5} reviews={65} />
        <ProductCard image={Bag} title="The North Coat" price={180} rating={4} reviews={65} />
        <ProductCard image={Cooler} title="The North Coat" price={400} rating={4.5} reviews={65} />
        <ProductCard image={Bookshelf} title="The North Coat" price={190} rating={4} reviews={65} />
      </div>

      <div className="flex justify-center mb-9">
        <Button>View All Products</Button>
      </div>
    </section>
  );
};

export default ExploreProducts;

