import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleTrigger = () => setToggle(!toggle);
  return (
    <nav className=" w-full flex justify-between items-center py-6 navbar">
      <img className="w-[124px] h-[32px]" src={logo} alt="" />
      <ul className="list-none hidden sm:flex flex-1 justify-end ">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins text-base font-normal cursor-pointer text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
            key={nav.id}
          >
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* For mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu-mobile"
          className="w-[28px] h-[28px] object-contain"
          onClick={handleTrigger}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-1 flex-col justify-end ">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins text-base font-normal cursor-pointer text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } `}
                key={nav.id}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
