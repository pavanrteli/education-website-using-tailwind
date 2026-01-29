import React, { useState } from "react";
import Logo from "../../public/images/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "../constant/data";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle)

  return (
    <header>
      <div className=" flex flex-row mx-auto p-5 justify-between bg-amber-50">
        <a href="#">
          <img src={Logo} alt="Logo" width={170} height={50} />
        </a>
        {
          toggle && 
          <nav className="md:hidden absolute top-16 bg-amber-50 w-full shadow-md">
            <ul className="">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href="">{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="bg-amber-300 rounded-xl p-2">Login</button>
          </nav>
        }
        <button className="md:hidden absolute right-5 top-7" onClick={() => setToggle((prev)=>(!prev))}>
          <MenuIcon />
        </button>

        <div className="hidden md:flex md:flex-row md:justify-center md:items-center">
          <ul className="flex flex-row gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="">{item.label}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="ml-4 bg-amber-300 p-2 rounded-xl">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
