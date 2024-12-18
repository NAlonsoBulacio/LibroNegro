import React, { useState } from "react";
import { logo_n } from "../../assets/index";

import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="z-40 top-0 pt-6 lg:pt-32 right-0 w-screen bg-white mx-auto flex items-center px-10 py-2 lg:py- justify-between lg:hidden"
        style={{ maxWidth: "1150px", height: "60px" }}
      >
        <div className="w-full flex justify-center items-center">
          <a href="/">
            <img className="w-[135px]" src={logo_n} alt="Trading Club" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center  w-screen h-auto bg-white shadow-lg lg:px-20 xl:px-36 pt-10 z-40">
        <div className="flex justify-center items-center h-full">
          <img className="h-auto w-[105px]" src={logo_n} alt="Trading Club" />
        </div>
      </div>
    </div>
  );
};

export default Header;
