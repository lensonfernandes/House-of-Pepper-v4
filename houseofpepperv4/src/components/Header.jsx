import React, { useState } from "react";
import Logo from "../img/img/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../img/img/avatar.png";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
import { MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import {GiBellPepper} from 'react-icons/gi'

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  let login = async () => {
    if (!user) {
      let {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      // console.log(response)

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  let logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  let showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <div className="fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 ">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full flex items-center">
        <Link to={"/"} className="flex items-center gap-2">
            <GiBellPepper />
          <p className="text-headingColor text-xl font-bold">House of Pepper</p>
        </Link>

        <ul className="ml-auto flex gap-5">
          <li>Home</li>
          <li>Fresh Stocks</li>
          {/* <li>About Us</li>
          <li>Service</li> */}
        </ul>
        <AiOutlineShoppingCart
          size="1.5em"
          style={{ marginLeft: "1vw" }}
          onClick={showCart}
        />
        {cartItems && cartItems.length > 0 && (
          <span className="bg-sky-600 w-6 h-6 rounded-full place-content-center text-white">
            {cartItems.length}
          </span>
        )}
        <div className="flex items-center ml-3">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 h-10 object-cover cursor-pointer rounded-full "
            alt="avatar"
            onClick={login}
          />
        </div>

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-4 py-4 top-16 right-0"
          >
            {user && user.email === "lenson.fernand@gmail.com" && (
              <Link to="/createItem">
                <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in">
                  New Item <MdAdd />
                </p>
              </Link>
            )}
            <p
              className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out"
              onClick={logout}
            >
              Logout <MdLogout />{" "}
            </p>
          </motion.div>
        )}
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <Link to={"/"} className="flex items-center gap-2">
          <GiBellPepper />
          <p className="text-headingColor text-xl font-bold">House Of Pepper</p>
        </Link>
        <div className="flex ml-auto">
          <AiOutlineShoppingCart
            size="1.5em"
            style={{ marginLeft: "1vw" }}
            onClick={showCart}
          />
           {cartItems && cartItems.length >0 && (
        <span className="bg-sky-600 w-6 h-6 rounded-full place-content-center text-white">
         {cartItems.length}
        </span>)}
        </div>

        <div className="flex items-center ml-3">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 h-10 object-cover cursor-pointer rounded-full "
            alt="avatar"
            onClick={login}
          />
        </div>

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-4 py-4 top-16 right-0"
          >
            {user && user.email === "lenson.fernand@gmail.com" && (
              <Link to="/createItem">
                <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in">
                  New Item <MdAdd />
                </p>
              </Link>
            )}
            <ul className=" flex flex-col gap-3 py-2 ">
              <li>Home</li>
              <li>Fresh Stocks</li>
              {/* <li>About Us</li>
              <li>Service</li> */}
            </ul>
            <p
              className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out bg-gray-200 p-2 rounded"
              onClick={logout}
            >
              Logout <MdLogout />{" "}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
