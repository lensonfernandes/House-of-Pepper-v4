import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full flex items-center justify-between p-4">
        <MdOutlineKeyboardBackspace />
        <p className="text-lg text-semibold"> Cart</p>
        <p className="flex items-center gap-2">
          Clear <RiRefreshFill />{" "}
        </p>
      </div>

      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll ">
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Lays - Chips</p>
              <p className="text-sm-block text-gray-300 font-semibold">Rs.20</p>
            </div>

            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <div>
                <BiMinus className="text-gray-50" />
              </div>
              <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <div>
                <BiPlus className="text-gray-50" />
              </div>
            </div>
          </div>
        </div> <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Sub Total</p>
          <p className="text-gray-400 text-lg">Rs. 20</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Delivery</p>
          <p className="text-gray-400 text-lg">Rs. 5</p>
        </div>
        <div className="w-full border-b border-gray-600 my-2"></div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg font-semibold">Total</p>
          <p className="text-gray-400 text-lg fonr-semi-bold">Rs. 20</p>
        </div>
        <button className="w-full p-2 rounded-full bg-blue-600 text-gray-50 text-lg my-2 hover:shadow-lg ">
            Check Out
        </button>
      </div>
      </div>

     
    </div>
  );
};

export default CartContainer;
