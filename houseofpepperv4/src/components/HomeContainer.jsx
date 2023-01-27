import React from "react";
import LocalProduce from "../img/img/localProduce.png";
import HeroBg from "../img/img/heroBg.png";
import I1 from "../img/img/i1.png";

import { heroData } from "../utils/data";


const HomeContainer = () => {
  return (
    <section
      className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="p-4 flex-1  flex flex-col items-start justify-center md:items-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-blue-100 p-2 rounded-full px-4 py-1 ">
          {" "}
          <p className="text-base text-blue-500 font-semibold">
            Local Produce at your Fingertips
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={LocalProduce}
              className="w-full h-full object-contain"
              alt="veggie"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor text-left">
          {" "}
          Fresh from Farm to your{" "}
          <span className="text-blue-600 text-[3rem] md:text-[5rem]">Home</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, debitis
          temporibus dolore voluptatibus nihil veniam amet. Eius deleniti nam a
          blanditiis? Recusandae a suscipit ex!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-blue-400 to-blue-500 w-full px-4 py-2 rounded-lg hover:shadow-lg md:w-auto"
        >
          Order now
        </button>
      </div>
      <div className="py-2 flex-1 relative">
       
        <img
          src={HeroBg}
          className="h-370  w-full lg:w-auto lg:h-650 ml-auto"
          alt=""
        />
        <div className="w-full h-full  absolute  top-0 left- 0 flex items-center justify-center px-16 py-4 gap-4 flex-wrap lg:px-32">
            {heroData && heroData.map (n => (
            <div key={n.id} className='lg:w-190  bg-cardOverlay shadow-lg backdrop-blur-md rounded-md p-4 flex items-center flex-col'>
                    <img src={n.imageSrc} alt="I1" className="w-20 lg:w-40 -mt-20"/>
                    <p className="text-base font-semibold text-textcolor">{n.name}</p>


            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
