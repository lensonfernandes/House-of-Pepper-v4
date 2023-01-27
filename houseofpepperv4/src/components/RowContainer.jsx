import React, {useEffect, useState} from "react";
import C1 from "../img/img/c1.png";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";

const RowContainer = ({ flag, data }) => {
  // console.log("line7")
  // console.log("line7", data);

  const [items, setItems] = useState([])

  const [{ cartItems }, dispatch] = useStateValue();

  let addToCart = () => {
    //console.log(item);

  

    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items
    })

    localStorage.setItem("cartItems", JSON.stringify(items))

  }

  useEffect(()=>{addToCart()}, [items])

  return (
    <div
      className={`w-full flex items-center  gap-3 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden flex-wrap"
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300  min-w-[300px] md:w-340 h-auto  my-12  backdrop-blur-lg drop-shadow-lg p-2 flex flex-col items-center justify-between "
          >
            <div className="w-full flex items-center justify-between">
              <img src={C1} alt="" className="w-48  -mt-8" />
            </div>
            <div onClick={()=>{  setItems([...cartItems, item])}} className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer">
              <MdShoppingBasket className="text-white" />
            </div>
            <div className="w-full flex items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {" "}
                {item.title}
              </p>
            </div>
            <div className="w-full flex items-end justify-end">
              <p className="text-lg font-semibold text-headingColor">
                <span>Rs</span>
                {item.price}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
