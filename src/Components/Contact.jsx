import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,  faSquareInstagram, faSquareXTwitter, faWhatsappSquare,  } from "@fortawesome/free-brands-svg-icons";
// import { faWhatsapp,faPhone } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div
        className="bg-gray-400 font-[sans-serif] text-white px-6 flex items-center justify-center md:py-16 py-0 "
        id="contact"
      >
        <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-gray-400  rounded  min-h-screen flex items-center justify-center">
          <div className="grid flex-col-reverse items-center lg:grid-cols-3">
            <div className="relative z-20 grid gap-4 sm:grid-cols-2 lg:left-16 max-lg:mb-8">
              <div className="md:mt-0 mt-[5.5rem] flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <div className="text-[30px] text-[#182B50] ">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h4 className="text-[#182B50] text-base font-extrabold mt-1">
                  Call us
                </h4>
                <p className="mt-2 text-xl text-[#182B50]">+2349038740391</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <div className="text-[30px] text-[#182B50] ">
                  <FontAwesomeIcon icon={faWhatsappSquare} />
                </div>

                <h4 className="text-[#182B50] text-base font-extrabold mt-1">
                  Chat Us
                </h4>
                <p className="mt-2 text-xl text-[#182B50]">+2349038740391</p>
              </div>

              <div className="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <div className="text-[30px] text-[#182B50] ">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <h4 className="text-[#182B50] text-base font-extrabold mt-1">
                  Email Us
                </h4>
                <p className="mt-2 text-lg text-[#182B50]">
                  obalao@jabu.edu.ng
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <div className="text-[25px] text-[#182B50] flex gap-5">
                  <div>
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </div>
                </div>
                <h4 className="text-[#182B50] text-base font-extrabold mt-1">
                  Follow Us
                </h4>
                <p className="mt-2 text-xl text-[#182B50]">@obalaoolumide</p>
              </div>
            </div>
            <div className="z-10 p-4 rounded lg:col-span-2 sm:p-10 ">
              <h2 className="mb-6 text-3xl font-extrabold text-center text-white">
                Contact Us
              </h2>
              <form name="" method="POST" data-netlify="true">
                <div className="max-w-sm mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-3 text-sm text-black bg-gray-100 rounded outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-3 text-sm text-black bg-gray-100 rounded outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="w-full px-6 py-3 text-sm text-black bg-gray-100 rounded outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full px-6 pt-3 text-sm text-black bg-gray-100 rounded outline-none"
                  ></textarea>
                  <button
                    type="button"
                    className="text-[#333] mx-auto block relative bg-gray-100 hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      className="inline mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
