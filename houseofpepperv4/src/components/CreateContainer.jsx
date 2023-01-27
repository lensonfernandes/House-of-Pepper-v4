import React from "react";
import { useState } from "react";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import { getAllFoodItems } from "../utils/firebaseFunctions";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [{}, dispatch] = useStateValue();

  let saveDetails = () =>{

    fetchData();
  }

   const fetchData = async() =>{
    await getAllFoodItems().then(data =>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  return (
    <div className="w-full min-h-screen  h-auto flex items-center  justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="w-full py-2 border-b border-gray-300 flex">
          <input
            type="text"
            value={title}
            placeholder="Enter title"
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none "
            onChange={(e) => setTitle(e.target.value)}

          />



        </div>
    <div className='w-full py-2 border-b border-gray-300 flex'>
    <input
            type="text"
            value={price}
            placeholder="Enter Price"
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none "
            onChange={(e) => setPrice(e.target.value)}

          />
    </div>
<div className="flex items-center w-full">
    <button type='button' className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg m-2" onClick={saveDetails}>Save Details </button>
</div>
      </div>
    </div>
  );
};

export default CreateContainer;
