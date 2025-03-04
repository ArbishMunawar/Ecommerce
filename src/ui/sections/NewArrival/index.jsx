import React from "react";
import Typography from "../../common/Typography/index";

const NewArrival = () => {
  return (
    <section className="w-full max-w-[1170px] mx-auto mt-28 px-4 md:px-8">
      <div className="flex gap-2 items-center">
        <Typography variant="before"></Typography>
        <Typography variant="p" className="text-[#DB4444] font-semibold">
          Featured
        </Typography>
      </div>

      <div className="flex justify-between mb-9">
        <Typography variant="h2" className="font-semibold mt-5">
          New Arrival
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 h-auto">
        <div className="w-full lg:w-1/2 min-h-[18rem] lg:h-[40rem] rounded">
          <div className="bg-black rounded flex flex-col items-start justify-end p-7 w-full h-full bg-[url('assets/Images/newarrival-1.png')] bg-cover bg-bottom bg-no-repeat">
            <Typography variant="h2" className="text-white font-bold pb-5">
              PlayStation 5
            </Typography>
            <Typography variant="p" className="text-white font-light pb-5">
              Black and White version of the PS5 <br /> coming out on sale.
            </Typography>
            <button className="text-white text-[1.1rem] underline font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <div className="min-h-[18rem] lg:h-1/2 w-full flex flex-col rounded items-start justify-end bg-[url('assets/Images/attractive-woman.png')] bg-cover bg-bottom bg-no-repeat p-5">
            <Typography variant="h4" className="text-white font-bold">
              Women’s Collections
            </Typography>
            <Typography variant="p" className="text-white font-light text-[0.7rem] pb-3 pt-3">
              Featured woman collections that <br /> give you another vibe.
            </Typography>
            <button className="text-white text-[0.8rem] underline font-semibold">
              Shop Now
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-5">

            <div className="min-h-[18rem] flex-1 flex flex-col items-start justify-end bg-black bg-[url('assets/Images/System.png')] bg-auto bg-center bg-no-repeat p-5 rounded">
              <Typography variant="h4" className="text-white font-bold">
                Speaker
              </Typography>
              <Typography variant="p" className="text-white font-light text-[0.7rem] pb-3 pt-3">
                Amazon wireless speakers
              </Typography>
              <button className="text-white text-[0.8rem] underline font-semibold">
                Shop Now
              </button>
            </div>

            <div className="min-h-[18rem] flex-1 flex flex-col items-start justify-end rounded bg-black bg-[url('assets/Images/Gucci.png')] bg-center bg-auto bg-no-repeat p-5">
              <Typography variant="h4" className="text-white font-bold">
                Perfumes
              </Typography>
              <Typography variant="p" className="text-white font-light text-[0.7rem] pb-3 pt-3">
                GUCCI INTENSE OUD EDP
              </Typography>
              <button className="text-white text-[0.8rem] underline font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
