import React from "react";
import { BoxArrowRight, GearFill } from "react-bootstrap-icons";
import logo from "../assets/logo.svg";

const Header = () => {
  const navMenus = [
    {
      id: Math.random().toString(),
      name: "ORGNIZATIONS",
    },
    {
      id: Math.random().toString(),
      name: "PEOPLE",
    },
    {
      id: Math.random().toString(),
      name: "STUDIES",
    },
    {
      id: Math.random().toString(),
      name: "REPORTS",
    },
    {
      id: Math.random().toString(),
      name: "NETWORK ACTIVITY",
    },
    {
      id: Math.random().toString(),
      name: "PROTOCOLS",
    },
  ];
  return (
    <div className="w-full flex justify-center relative flex-col pt-2">
      <div className="w-full absolute flex justify-end h-full items-start p-1 text-blue-900 text-xs">
        <a href="#" className="no-underline">
          <span class="sign-out-container flex items-center">
            <span className="mr-1">Sign out</span> <BoxArrowRight />
          </span>
        </a>
      </div>

      <div className="width-full flex justify-between pt-2 pb-2">
        <div>
          <img className="w-48" src={logo} alt="" />
        </div>
        <div className=" items-end flex ">
          {navMenus.map((each) => (
            <a
              className="ml-2 md:flex hidden truncate z-10 mr-2 text-sky-600 no-underline font-semibold text-xs hover:text-yellow-500"
              href="#"
              key={each.id}
            >
              {each.name}
            </a>
          ))}
          <GearFill className="w-3 text-sky-600  hidden sm:flex" />
        </div>
      </div>
    </div>
  );
};

export default Header;
