import React from "react";
import logo from "../../assets/Img/Logo/Eu-PrestigeHomes.png";
import "./Footer.css";
import en from "../../assets/Img/Logo/en.svg";
import es from "../../assets/Img/Logo/es.svg";
import pt from "../../assets/Img/Logo/pt.svg";
import de from "../../assets/Img/Logo/de.svg";

export const Footer = () => {
  return (
    <div className="w-[100%] relative bg-[#fff] z-10" align="center">
      <div className="w-[90%] lg:w-[80%]">
        <img className="w-[80%] lg:w-[40%]" src={logo} alt="logo" />
        <div className="w-[100%] flex justify-center pt-10 flex-wrap gap-x-10">
          <a
            href="tel:41779414144"
            target="_blank"
            className="text-[18px] lg:text-[20px] font-semibold font-montserrat"
          >
            <i class="fa-solid fa-phone border-2 border-[#306677] p-2 rounded text-[#306677]"></i>
            &nbsp;&nbsp;+41 779414144
          </a>
          <a
            href="mailto:info@eu-prestigehomes.com"
            target="_blank"
            className="text-[18px] lg:text-[20px] mt-8 lg:mt-0 font-semibold font-montserrat"
          >
            <i class="fa-solid fa-envelope border-2 border-[#306677] p-2 rounded text-[#306677]"></i>
            &nbsp;&nbsp;info@eu-prestigehomes.com
          </a>
        </div>
        <div className="w-[100%] flex justify-center py-10 flex-wrap gap-x-2">
          <a
            href="https://www.instagram.com/eu.prestigehomes/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
            className="text-[20px] font-normal font-space"
          >
            <i class="fa-brands fa-square-instagram border-2 border-[#306677] p-2 rounded text-[#306677]"></i>
          </a>
          <a
            href=""
            target="_blank"
            className="text-[20px] font-bold font-space"
          >
            <i class="fa-brands fa-facebook border-2 border-[#306677] p-2 rounded text-[#306677]"></i>
          </a>
          <a
            href=""
            target="_blank"
            className="text-[20px] font-normal font-space"
          >
            <i class="fa-brands fa-linkedin-in border-2 border-[#306677] p-2 rounded text-[#306677]"></i>
          </a>
        </div>
        <div className="w-[100%] flex justify-center flex-wrap gap-x-2">
          <img src={en} className="w-[30px]" alt="logo" />
          <img src={de} className="w-[30px]" alt="logo" />
          <img src={pt} className="w-[30px]" alt="logo" />
          <img src={es} className="w-[30px]" alt="logo" />
        </div>
      </div>
      <div className="w-[100%] mt-10 py-3 text-[16px] lg:text-[18px] text-[#fff] font-montserrat bg-[#306677]">
        Copyright © 2023 by EU-PrestigeHomes
      </div>
    </div>
  );
};
