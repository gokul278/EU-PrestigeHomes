import React, { useEffect, useState } from "react";
import bg1 from "../../assets/Img/Home/bg-1.webp";
import { Loader } from "../../Pages/Loader/Loader";
export const Home = () => {
  const [loadingstatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false);
    }, 1000); // 1000 milliseconds = 1 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20">
      {loadingstatus ? <Loader /> : <></>}
      <div
        className="w-[100%] h-[90vh]"
        style={{
          backgroundImage: `url(${bg1})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#000]/[.6] w-[100%] h-[90vh] flex flex-col justify-center items-center">
          <div className="upercase font-cinzel text-[50px] text-[#fff] font-bold">
            Welcome to EU-PrestigeHomes
          </div>
          <div className=" capitalize font-playfair italic text-[40px] text-[#fff] font-normal">
            Find Your Ideal Home in Spain
          </div>
        </div>
      </div>
    </div>
  );
};
