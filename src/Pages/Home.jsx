// import CallToAction from "../Components/CallToAction";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import BookAnAppointment from "./BookAnAppointment";
// import { BrowserRouter } from "react-router-dom";

import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [openModal, closeModal] = useState(false);

  const handleModal = () => {
    closeModal(!openModal);
  };
  return (
    // <BrowserRouter>
    <>
      <Navbar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        openModal={openModal}
        handleModal={handleModal}
      />
      {openModal ? <BookAnAppointment handleModal={handleModal} /> : null}
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonial />

      <Contact />
      <Footer />
    </>

    // </BrowserRouter>
  );
};

export default Home;
