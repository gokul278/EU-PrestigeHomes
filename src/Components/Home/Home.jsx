import React, { useEffect, useState } from "react";
import bg1 from "../../assets/Img/Home/bg-1.webp";
import { Loader } from "../../Pages/Loader/Loader";
import img1 from "../../assets/Img/Home/img1.jpg";
import img2 from "../../assets/Img/Home/img2.jpg";
import "./Home.css";
import bg2 from "../../assets/Img/Home/bg-2.jpg";

export const Home = () => {
  const [loadingstatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Fixed background with z-index */}
      <div
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Fixed background
        }}
      ></div>

      <div className="relative w-[100%] pt-20 z-10">
        {/* Show loader */}
        {loadingstatus ? <Loader /> : null}

        {/* Content that will scroll over the fixed background */}
        <div
          className="w-[100%] h-[90vh]"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        >
          <div
            className="bg-[#000]/[.6] w-[100%] h-[90vh] flex flex-col justify-center items-center"
            align="center"
          >
            <div className="uppercase font-cinzel text-[30px] lg:text-[50px] text-[#fff] font-bold">
              Welcome to <span className="block lg:hidden"></span>{" "}
              EU-PrestigeHomes
            </div>
            <div className="mt-5 capitalize font-playfair italic text-[30px] lg:text-[40px] text-[#fff] font-normal">
              Find Your Ideal Home in Spain
            </div>
          </div>
        </div>

        <div className="w-[100%] bg-[#fff] py-10" align="center">
          <div className="w-[90%] flex-col lg:flex-row flex">
            <div className="w-[100%] lg:w-[50%] flex justify-center lg:justify-start items-end">
              <img
                className=" w-[300px] h-[400px] rounded-md lg:w-[450px] lg:h-[500px]"
                src={img1}
                alt="img1"
              />
              <img
                className=" w-[200px] h-[200px] ml-[-180px] lg:ml-[-200px] mb-5 rounded-md lg:w-[250px] lg:h-[250px]"
                src={img2}
                alt="img2"
              />
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center lg:items-start">
              <div className="mt-8 lg:mt-0 text-[20px] text-[#000] font-cinzel text-center font-bold">
                About
              </div>
              <div className="text-[23px] mt-2 lg:mt-0 lg:text-[48px] text-[#306677] font-cinzel font-bold">
                EU-PrestigeHomes
              </div>
              <div className="w-[100%] mt-5 lg:mt-0 font-[16px] font-montserrat text-justify tracking-wider">
                Every property acquisition and sale is unique and, therefore,
                deserves an individual approach. Our clients’ requests have the
                utmost priority, and we are committed to maintaining consistent
                service quality across all our services.
              </div>
              <div className="mt-4 lg:mt-5 w-[100%] font-[16px] font-montserrat text-justify tracking-wider">
                Real Estate is our passion – With our strong presence, our
                growing international network we have the privilege of reaching
                an exclusive clientele and provide first class service.
              </div>
              <div>
                <button className="button mt-10">
                  <p className="text font-cinzel">Read More</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#000]/[.6] w-full py-20" align="center">
          <div className="uppercase text-[#fff] text-[20px] lg:text-[30px] font-cinzel">
            Why Choose
          </div>
          <div className="uppercase text-[#fff] mt-3 text-[30px] lg:text-[50px] font-bold font-cinzel">
            EU-PrestigeHomes
          </div>

          <div className="w-[100%] mt-5" align="center">
            <div className="w-[90%] gap-x-10 gap-y-10 flex flex-wrap justify-center">
              <div className="w-[350px] h-[280px] border-2 cursor-pointer">
                <div className="mt-5">
                  <i class="fa-regular fa-circle-check text-[#fff] text-[50px]"></i>
                </div>
                <div className="mt-5 text-[20px] font-cinzel text-[#fff] font-normal">
                  Tailored Approach
                </div>
                <div className="mt-5 w-[90%] text-[14px] font-light tracking-wide text-[#fff] font-montserrat">
                  Every property deal is unique, deserving a customized
                  strategy. We prioritize individuality, ensuring each
                  transaction receives a tailored approach to meet the distinct
                  needs of our clients.
                </div>
              </div>
              <div className="w-[350px] h-[280px] border-2 cursor-pointer">
                <div className="mt-5">
                  <i class="fa-regular fa-circle-check text-[#fff] text-[50px]"></i>
                </div>
                <div className="mt-5 text-[20px] font-cinzel text-[#fff] font-normal">
                  Client-Centric Focus
                </div>
                <div className="mt-5 w-[90%] text-[14px] font-light tracking-wide text-[#fff] font-montserrat">
                  Our clients are our top priority. With an unwavering
                  commitment to their requests, we maintain consistent service
                  quality across all real estate transactions, fostering
                  transparent, satisfying experiences.
                </div>
              </div>
              <div className="w-[350px] h-[280px] border-2 cursor-pointer">
                <div className="mt-5">
                  <i class="fa-regular fa-circle-check text-[#fff] text-[50px]"></i>
                </div>
                <div className="mt-2 text-[20px] font-cinzel text-[#fff] font-normal">
                  Passionate Experts with Global Reach
                </div>
                <div className="mt-1 w-[90%] text-[14px] font-light tracking-wide text-[#fff] font-montserrat">
                  Real estate is our passion. Backed by a strong presence and an
                  expanding international network, we passionately serve an
                  exclusive clientele, offering first-class services that
                  transcend geographical boundaries.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%]"></div>
      </div>
    </div>
  );
};
