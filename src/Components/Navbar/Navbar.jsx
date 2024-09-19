import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation from react-router-dom
import logo from "../../assets/Img/Logo/Eu-PrestigeHomes.png";
import en from "../../assets/Img/Logo/en.svg";
import es from "../../assets/Img/Logo/es.svg";
import pt from "../../assets/Img/Logo/pt.svg";
import de from "../../assets/Img/Logo/de.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const isActive = (path) => location.pathname === path; // Function to check active status

  return (
    <>
      <header className="fixed border-b-1 z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-4 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.0rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <img className="w-[200px]" src={logo} alt="logo" />
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[auto] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                    isActive("/") ? "text-[#306677]" : ""
                  }`}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <span
                    className={`font-bold font-cinzel ${
                      isActive("/") ? "mt-1 border-b-2 border-[#306677]" : ""
                    } text-[17px]`}
                  >
                    Home
                  </span>
                </div>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                    isActive("/about") ? "text-[#306677]" : ""
                  }`}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  <span
                    className={`font-bold font-cinzel ${
                      isActive("/about")
                        ? "mt-1 border-b-2 border-[#306677]"
                        : ""
                    } text-[17px]`}
                  >
                    About
                  </span>
                </div>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                    isActive("/properties") ? "text-[#306677]" : ""
                  }`}
                  onClick={() => {
                    navigate("/properties");
                  }}
                >
                  <span
                    className={`font-bold font-cinzel ${
                      isActive("/properties")
                        ? "mt-1 border-b-2 border-[#306677]"
                        : ""
                    } text-[17px]`}
                  >
                    Our Properties
                  </span>
                </div>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                    isActive("/blog") ? "text-[#306677]" : ""
                  }`}
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  <span
                    className={`font-bold font-cinzel ${
                      isActive("/blog")
                        ? "mt-1 border-b-2 border-[#306677]"
                        : ""
                    } text-[17px]`}
                  >
                    Blog
                  </span>
                </div>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 ${
                    isActive("/contact") ? "text-[#306677]" : ""
                  }`}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  <span
                    className={`font-bold font-cinzel ${
                      isActive("/contact")
                        ? "mt-1 border-b-2 border-[#306677]"
                        : ""
                    } text-[17px]`}
                  >
                    Contact Us
                  </span>
                </div>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[#306677] focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 `}
                >
                  <div className="flex gap-x-1">
                    <img src={en} className="w-[30px]" alt="logo" />
                    <img src={de} className="w-[30px]" alt="logo" />
                    <img src={pt} className="w-[30px]" alt="logo" />
                    <img src={es} className="w-[30px]" alt="logo" />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
