import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { navLinks } from "../../data/navbarData";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { onClickOutSide } from "../../utils/onClickOutside";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const [showSidebar, setShowSidebar] = useState(false);

  onClickOutSide(ref, (e) => {
    setShowSidebar(false);
  });

  return (
    <header className="text-white sticky top-0 z-100 bg-black">
      {/* mobile nav */}
      <div className=" md:hidden flex items-center justify-between h-[64px] relative z-50">
        <div className="p-4 flex items-center justify-center">
          <img
            src={logo}
            alt=""
            className="h-7 m-2"
          />
          <div className="flex flex-col ">
            <h1 className="text-[1.2rem] font-[700] text-[#fcba03] tracking-[0.15rem] m-0 p-0 leading-none">
              ROOPA
            </h1>
            <p className="text-[0.5rem] tracking-[0.05rem] text-[#fcba03] font-medium m-0 p-0 leading-none">
              INFRASTRUCTURES
            </p>
          </div>
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className="m-5">
          {!showSidebar && <IoMdMenu className="fill-white" />}
        </div>
        {/* Overlay */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30"></div>
        )}
        {/* Sidebar */}

            <div
              ref={ref}
              className={`fixed right-0 bg-black top-0 w-[70vw] h-full z-40 flex flex-col items-center pt-[40vw] gap-4 transition-transform duration-300 ease-in-out transform ${
                showSidebar ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div
                className="flex absolute top-5 left-5"
                onClick={() => setShowSidebar(false)}
              >
                <IoClose className="fill-white" />
              </div>
              <p
                className="text-white py-4 w-[8rem] border-b text-center"
                onClick={() => {
                  const element = document.getElementById("home");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </p>
              {navLinks.map((link) => (
                <div key={link.id} className="text-white px-6">
                  <button
                    className="py-4 w-[8rem] border-b"
                    onClick={() => {
                      const element = document.getElementById(`${link.linkid}`);
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                      
                    }}
                  >
                    {link.title}
                  </button>
                </div>
              ))}
            </div>

      </div>

      {/* desktop nav */}
      <div className="hidden md:flex w-full items-center justify-center py-2">
        <div className="container flex items-center justify-between">
          <div
            className="flex cursor-pointer items-center"
            onClick={() => {
              const element = document.getElementById("home");
              element.scrollIntoView({
                behavior: "smooth",
              });
              setTimeout(() => {
                      window.location.hash = '';
                  }, 600);
            }}
          >
            <img src={logo} alt="" className="h-11 m-2" />
            <div className="flex flex-col ">
              <h1 className="text-[2rem] font-[700] text-[#fcba03] tracking-[0.15rem] m-0 p-0 leading-none">
                ROOPA
              </h1>
              <p className="text-[0.8rem] tracking-[0.05rem] text-[#fcba03] font-medium m-0 p-0 leading-none">
                INFRASTRUCTURES
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            {navLinks.map((link) => (
              <div key={link.id}>
                <button
                  onClick={() => {
                    const element = document.getElementById(`${link.linkid}`);
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                    setTimeout(() => {
                      window.location.hash = link.linkid;
                    }, 600);
                  }}
                  className={`hover:text-yellow-500 cursor-pointer ${
                    window.location.hash === `#${link.linkid}`
                      ? "text-yellow-500"
                      : ""
                  }`}
                >
                  {link.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
