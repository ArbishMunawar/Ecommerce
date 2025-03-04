import React from "react";
import TopSection from "../../common/TopSection/index";
import CategoryCard from "../../common/CategoryCard/index";
import ComputerIcon from "../../../assets/Icons/ComputerIcon";
import SmartWatch from "../../../assets/Icons/SmartWatch";
import Camera from "../../../assets/Icons/Camera";
import HeadPhone from "../../../assets/Icons/HeadPhone";
import Gaming from "../../../assets/Icons/Gaming";
const BrowseByCategory = () => {
  return (
    <>

<section className="w-full max-w-[1170px] mx-auto mt-20 mb-8 border-b border-gray-300 px-4 md:px-8">
        <TopSection title="Browse by Category" subtitle="Categories" className="mb-9" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          <CategoryCard />
          <CategoryCard icon={<ComputerIcon />} title="Computers" />
          <CategoryCard icon={<SmartWatch />} title="SmartWatch" />
          <CategoryCard icon={<Camera />} title="Camera" className="bg-[#DB4444] " />
          <CategoryCard icon={<HeadPhone />} title="HeadPhone" />
          <CategoryCard icon={<Gaming />} title="Gaming" />
        </div>
      </section>
    </>
  );
};

export default BrowseByCategory;
