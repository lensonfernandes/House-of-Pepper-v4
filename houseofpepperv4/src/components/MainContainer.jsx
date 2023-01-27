import React from "react";
import { useStateValue } from "../Context/StateProvider";
import CartContainer from "./CartContainer";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";

const MainContainer = () => {

  const [{foodItems, cartShow}, dispatch] = useStateValue();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full  my-6 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold  relative ">Fresh stocks</p>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center"></div>
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center"></div>
          </div>
        </div>
        <RowContainer flag={true} data={foodItems}/>
       
      </section>
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
