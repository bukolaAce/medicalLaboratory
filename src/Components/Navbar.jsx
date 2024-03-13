/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./Logo";

const Navbar = ({ isOpen, toggleMenu, handleModal }) => {
  const navLinks = [
    { id: 1, path: "/", label: "Home", Route: "#herosection" },
    { id: 2, path: "/about", label: "About", Route: "#aboutus" },
    { id: 3, path: "/contact", label: "Service", Route: "#services" },
    { id: 4, path: "/contact", label: "Testimonials", Route: "#testimonial" },
    { id: 5, path: "/contact", label: "Contact Us", Route: "#contact" },
    // { id: 6, path: '/contact', label: 'Contact' },
    // Add more links as needed
  ];

  return (
    <>
      <header className="relative  flex flex-wrap items-center justify-between gap-5        md:flex  hidden shadow-md py-4 px-4 sm:px-10 bg-[#182B50] font-[sans-serif] min-h-[70px]  sticky top-0 z-50 ">
        <a href="javascript:void(0)">
          <div className="flex gap-2 items-center">
            <div>
              <img src="./images/lab.png" alt="" className="w-11" />
            </div>
            <div className="flex items-center">
              <span className="text-white text-xl font-bold mr-2">
                Effective
              </span>
              <span className="text-white text-xl font-bold mr-2">Health</span>
              <span className="text-white text-xl font-bold mr-2">and</span>
              <span className="text-white text-xl font-bold mr-2">
                Wellness
              </span>
            </div>
          </div>
        </a>
        <div className="flex lg:order-1 max-sm:ml-auto">
          <button
            className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            onClick={handleModal}
          >
            Book An Appointment
          </button>

          <button id="toggle" className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
        >
          {navLinks.map((nav) => {
            return (
              <>
                <li
                  className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded"
                  key={nav.id}
                >
                  <HashLink
                    to={nav.Route}
                    href="javascript:void(0)"
                    className="lg:hover:text-[#007bff] text-[#f9f9fa] max-lg:text-white block font-semibold text-[15px]"
                    smooth
                  >
                    {nav.label}
                  </HashLink>
                </li>
              </>
            );
          })}
        </ul>
      </header>

      <nav className="sticky top-0 z-50 flex-col w-full p-4 bg-[#182B50] md:hidden">
        <div className="container flex items-center justify-between mx-auto">
          <HashLink to="/" className="text-lg font-bold text-white">
            <div className="flex gap-2 items-center">
              <div>
                <img src="./images/lab.png" alt="" className="w-7" />
              </div>
              <div className="flex items-center">
                <span className="text-white text-xl font-bold mr-2">
                  Effective
                </span>
                <span className="text-white text-xl font-bold mr-2">
                  Health
                </span>
                <span className="text-white text-xl font-bold mr-2">
                  and
                </span>
                <span className="text-white text-xl font-bold mr-2">
                  Wellness
                </span>
              </div>
            </div>
          </HashLink>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon size="2x" icon={faBars} />
            </button>
          </div>
        </div>

        {/* MODAL */}
        {isOpen ? (
          <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
              <div className="w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right">
                <button className="text-xl " onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
              <div className="my- text-center flex-col items-end">
                {navLinks.map((nav) => {
                  return (
                    <>
                      <HashLink to={nav.Route} smooth>
                        <h4
                          className="text-xl  font-semibold mt-6 hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          {nav.label}
                        </h4>
                      </HashLink>
                    </>
                  );
                })}
              </div>
              <div className="text-center space-x-4" onClick={toggleMenu}>
                <button
                  className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
                  onClick={handleModal}
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
