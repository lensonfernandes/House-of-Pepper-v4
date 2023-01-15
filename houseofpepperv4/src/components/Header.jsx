import React from "react";
import Logo from "../img/img/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../img/img/avatar.png";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";





const Header = () => {

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const [{user}, dispatch] = useStateValue()

  let login = async () => {

    let {user : {refreshToken, providerData}} = await  signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })
    // console.log(response)

    localStorage.setItem('user', JSON.stringify(providerData[0]))
  }

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
          whileTap={{scale:0.6}}
            src={user ? user.photoURL : Avatar}
            className="w-10 h-10 object-cover cursor-pointer rounded-full "
            alt="avatar"
            onClick={login}
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </div>
  );
};

export default Header;
