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

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

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
    }
    else{
      setIsMenu(!isMenu)
    }
  };

  return (
    <div className="fixed z-50 w-screen  p-6 px-16 ">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full flex items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo"></img>
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <ul className="ml-auto flex gap-5">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Service</li>
        </ul>
        <AiOutlineShoppingCart size="1.5em" style={{ marginLeft: "1vw" }} />
        <span className="bg-sky-600 w-6 h-6 rounded-full place-content-center text-white">
          2
        </span>
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
          <motion.div initial={{opacity:0, scale:0.6}} 
          animate={{opacity:1, scale:1}} 
          exit={{opacity:0, scale:0.6}} 
          
          
          className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-4 py-4 top-16 right-0">
            {user && user.email === "lenson.fernand@gmail.com" && (
              <Link to="/createItem">
                <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in">
                  New Item <MdAdd />
                </p>
              </Link>
            )}
            <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out">
              Logout <MdLogout />{" "}
            </p>
          </motion.div>
        )}
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </div>
  );
};

export default Header;
