/* eslint-disable no-unused-vars */
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
import Modal2 from "../Pages/Modal2";
import Explore from "./Explore";
import {
  faFacebook,
  faTwitter,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const OluContact = () => {
  const OluInfo = [
    {
      id: 1,
      name: "Scientist Alao Olumide",

      phone: "+2349038740391",
      email: "olasupobukola@gmail.com",
    },
  ];
  return (
    <>
      {OluInfo.map((Olu) => {
        const { name, phone } = Olu;
        return (
          <>
            <div className=" h-auto p-4 rounded-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <div className="flex flex-col items-center text-green-600">
                <img
                  src="./images/olu.jpg"
                  className="object-contain object-top rounded-md w-80"
                />
                <div className="mt-4">
                  <h4 className="text-xl font-extrabold text-[#182b50]">
                    {name}
                  </h4>
                  <p className="text-xs font-extrabold mt-1 text-center text-[#182b50]">
                    CEO, Company
                  </p>
                </div>
              </div>
              <div className="mt-1 text-center">
                <p className="text-sm leading-relaxed text-[#182b50] font-bold">
                  {phone}
                </p>
              </div>
              <div className="flex justify-center gap-5 mx-auto mt-2 text-center">
                <a
                  href="obalao@jabu.edu.ng"
                  className="text-[0.6rem]  text-[#182b50] "
                >
                  <FontAwesomeIcon size="2x" icon={faEnvelope} />
                </a>
                <a
                  href="facebook.com/alaoolumided"
                  className=" text-[0.6rem]  text-[#182b50]"
                >
                  <FontAwesomeIcon size="2x" icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/obalaoolumide"
                  className="text-[0.6rem]  text-[#182b50]"
                >
                  <FontAwesomeIcon size="2x" icon={faTwitter} />
                </a>
                <a
                  href="+2349038740391"
                  className="text-[0.6rem]  text-[#182b50]"
                >
                  <FontAwesomeIcon size="2x" icon={faWhatsappSquare} />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const AboutUs = () => {
  const [modalContent, setModalContent] = useState(null);
  const handleButtonClick = (content) => {
    setModalContent(content);
  };

  const terminateModal = () => {
    setModalContent(null);
  };
  return (
    <>
      <div
        className="bg-[#182b50] font-[sans-serif] text-white px-6 flex items-center justify-center py-[3.8rem] md:min-h-screen"
        id="aboutus"
      >
        <div className="grid items-center max-w-5xl gap-10 mx-auto md:grid-cols-2 max-md:max-w-md">
          <div
            className="max-md:text-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine
              
              "
            data-aos-duration="700"
          >
            <h3 className="text-2xl font-extrabold md:text-white md:text-4xl md:pt-0">
              Our Mission.
            </h3>
            <p className="mt-6 text-lg text-white lg:text-xl">
              To relentlessly advance public healthcare, we collaborate with
              diverse stakeholders to evaluate healthcare organizations. Our
              mission is to inspire excellence, ensuring the delivery of safe,
              effective care of the highest quality and value.
            </p>
            <Explore
              buttonText="Explore"
              modalContent={OluContact}
              onButtonClick={handleButtonClick}
            />
          </div>

          <div
            className="md:h-[400px]"
            //   data-aos="fade-left"
            //   data-aos-offset="300"
            //   data-aos-easing="ease-in-sine

            // "
            //   data-aos-duration="700"
          >
            <img
              src="./images/Dna.jpg"
              className="object-contain w-full h-full rounded-lg "
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

export default AboutUs;
