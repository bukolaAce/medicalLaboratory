// eslint-disable-next-line react/prop-types

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
const BookAnAppointment = ({ handleModal }) => {
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
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="relative w-full max-w-lg p-6 bg-white rounded-md shadow-lg">
          <div className="w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right">
            <button className="text-xl " onClick={handleModal}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          {OluInfo.map((Olu) => {
        const { name, phone } = Olu;
        return (
          <>
            <div className=" h-auto p-4 rounded-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
              <div className="flex flex-col items-center text-green-600">
                <img
                  src="./images/olu.jpg"
                  className="w-80 object-contain object-top rounded-md"
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
              <div className="mt-2 text-center flex mx-auto justify-center gap-5">
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
        </div>
      </div>
    </>
  );
};

export default BookAnAppointment;
