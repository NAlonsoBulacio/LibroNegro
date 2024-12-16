import React, { useState } from "react";
import { logo_n } from "../../assets/index";
import logo2 from "../../assets/logo-transparente.png";
import MenuPhone from "../MenuPhone/MenuPhone";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="z-40 top-0 pt-20 lg:pt-32 right-0 w-screen bg-white mx-auto flex items-center px-10 py-6 justify-between lg:hidden"
        style={{ maxWidth: "1150px", height: "100px" }}
      >
        <div className="w-full flex justify-center items-center">
          <a href="/">
            <img className="w-[105px]" src={logo_n} alt="Trading Club" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center  w-screen h-32 bg-white shadow-lg lg:px-20 xl:px-36 pb-2 pt-14 z-40">
        <div className="flex justify-center items-center h-full">
          <img className="h-full" src={logo_n} alt="Trading Club" />
        </div>
        {/* <div className="w-2/3">
          <ul className="flex justify-center text-lg items-center space-x-12 font-plus-400 text-gray-400">
            <li>
              <a className="underline-on-hover" href="#description">
                Descripcion
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#amenities">
                Amenidades
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#description">
                Fotos
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#q&a">
                Q&A
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <a className="flex justify-center items-center" href="#button-buy">
            <button className="lg:text-lg xl:text-xl font-plus-600 border-2 rounded-xl py-2 px-4 transition duration-400 button-buy">
            Comprar - $32.000
            </button>
          </a>
        </div> */}
      </div>
      <div>
        {menuOpen ? <MenuPhone handleMenuToggle={handleMenuToggle} /> : ""}
      </div>
    </div>
  );
};

export default Header;
