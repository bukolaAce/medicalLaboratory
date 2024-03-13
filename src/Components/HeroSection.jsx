import { useState } from "react";
import Modal2 from "../Pages/Modal2";
import Explore from "./Explore";
const HeroSection = () => {
  const [modalContent, setModalContent] = useState(null);
  const handleButtonClick = (content) => {
    setModalContent(content);
  };

  const terminateModal = () => {
    setModalContent(null);
  };

  // EXPLORE HEROSECTION
  const heroExplore = () => {
    return (
      <div className="flex-col items-center justify-center mx-auto">
        <h1 className="text-center font-bold text-[#182B50]">AIM</h1>
        <p className="flex flex-wrap text-center  text-[#182B50] my-2">
          We deliver essential laboratory services with precision and care.
          Conducting diverse diagnostic tests, We contribute to accurate patient
          diagnoses, treatment planning, and overall healthcare excellence. Our
          commitment to quality ensures the delivery of reliable and timely
          laboratory results for optimal patient care.
        </p>
      </div>
    );
  };

  return (
    <>
      <div
        className="bg-gray-400 font-[sans-serif] text-white px-6 pb-6 md:pb-0 flex items-center justify-center pt-20 md:pt-0 md:min-h-screen"
        id="herosection"
      >
        <div className="grid items-center max-w-5xl gap-10 mx-auto md:grid-cols-2 max-md:max-w-md">
          <div
            className="md:h-[400px] "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine
              
              "
            data-aos-duration="700"
          >
            <img
              src="./images/person1.jpg"
              className="object-contain w-full h-full rounded md:pt-0"
            />
          </div>
          <div
            className="max-md:text-center"
            // data-aos="fade-left"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="700"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold md:leading-10  text-[#182B50]">
              Your Trusted Partner in Medical Laboratory Services
            </h3>
            <p className="mt-6 text-lg lg:text-xl text-[#182B50]">
              Providing Accurate Diagnostics for Better Healthcare
            </p>
            <Explore
              className="bg-red-300"
              buttonText="Explore"
              modalContent={heroExplore}
              onButtonClick={handleButtonClick}
            />
          </div>
        </div>
        {modalContent && (
          <Modal2 content={modalContent} onClose={terminateModal} />
        )}
      </div>
    </>
  );
};

export default HeroSection;
