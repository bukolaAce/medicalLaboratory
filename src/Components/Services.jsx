import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Component1 from "../Tests/Component1";
import Component2 from "../Tests/Component2";
import Component3 from "../Tests/Component3";
import Component4 from "../Tests/Component4";
import Component5 from "../Tests/Component5";
import Component6 from "../Tests/Component6";
import {
  faDna,
  faVialVirus,
  faPeopleGroup,
  faSquarePollHorizontal,
  faFlaskVial,
  faUserTie,
  faIdCardClip,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal2 from "../Pages/Modal2";
import Explore from "./Explore";
const Services = () => {
  const cards = [
    {
      id: 1,
      title: "Laboratory Testing",
      subtitle: "Precision in Every Analysis",
      imageUrl: "./images/Dna.jpg",
      icon: faVialVirus,
      More: "Learn More",
      components: Component1,
      Test: {
        First:
          "HEMATOLOGICAL TESTING\nList Of Test\nPCV,HB,WBC,ESR,MCHC,DIFFERENTIAL,MCV,RBC,RETIC,SICKLING,GENOTYPE,MCH,PATLETS,PROTHROMBIN,BLEEDING TIME,CLOTTING TIME,L.E CELLS,BLOOD GROUP,DIRECT COOMBS TEST,INDIRECT COOMBS TEST,FILM READING     ",
        Second: "Microbiology",
        Third: "ClinicalChemistry",
        Fourth: "Histopathology",
      },
    },
    {
      id: 2,
      title: "Dna Testing",
      subtitle: "Unlocking Genetic Insights",
      icon: faDna,
      More: "Learn More",
      components: Component2,
      Test: {
        First: "Paternity",
        Second: "Maternity",
      },
    },
    {
      id: 3,
      title: "Consultation",
      subtitle: "Medical Guidance Tailored for You",
      icon: faPeopleGroup,
      More: "Learn More",
      components: Component3,

      Test: {
        First: "The right consultation",
      },
    },
    {
      id: 4,
      title: "Result Interpretation",
      subtitle: "Interpreting Results with Precision",
      icon: faSquarePollHorizontal,
      More: "Learn More",
      components: Component4,
      Test: {
        First: "Accurate results Interpretation",
      },
    },
    {
      id: 5,
      title: "Laboratory Setup",
      subtitle: "Seamless Laboratory Setup Assistance",
      icon: faFlaskVial,
      More: "Learn More",
      components: Component5,
      Test: {
        First: "Laboratory Setup",
      },
    },
    {
      id: 6,
      title: "Mentorship",
      subtitle: "Nurturing Success through Mentorship",
      icon: faUserTie,
      More: "Learn More",
      components: Component6,
      Test: {
        First: "The right Mentorship",
      },
    },
  ];

  const [modalContent, setModalContent] = useState(null);
  const handleButtonClick = (content) => {
    faIdCardClip;
    setModalContent(content);
  };

  const terminateModal = () => {
    setModalContent(null);
  };

  // map through to create links from fullname
  // let links = cards.map((card) => {
  //   const { id, Test } = card;
  //   let FirstTest = Test.First ? Test.First : "";
  //   let SecondTest = Test.Second ? Test.Second : "";
  //   let ThirdTest = Test.Third ? Test.Third : "";
  //   let FourthTest = Test.Fourth ? Test.Fourth : "";
  //   let fullName = `${FirstTest} ${SecondTest} ${ThirdTest} ${FourthTest}`;

  //   return { id, Test: <a href={`/profile/${id}`}>{fullName}</a> };
  // });

  return (
    <>
      <div
        className="bg-gray-400 font-[sans-serif] text-white px-6 flex items-center justify-center py-16 md:py-10   "
        id="services"
      >
        <div className="mx-auto max-w-7xl ">
          <h2 className="pt-1 mb-10 text-2xl font-extrabold text-center text-white md:pt-10 md:mb-6 sm:text-4xl ">
            Discover Our Exclusive Services
          </h2>
          <div className="grid gap-12 mx-auto lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg">
            {/* cards */}
            {cards.map((card) => {
              return (
                <>
                  <div className="p-8 text-center bg-[#686475] transition duration-300 rounded-xl group hover:bg-[#767380]  hover:shadow-xl">
                    {/* FONT AWESOME ICON */}
                    <div className="inline-block w-8 mb-4">
                      <FontAwesomeIcon size="2x" icon={card.icon} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-[#d3dced]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#d3dced]">{card.subtitle}</p>
                    <div className="flex items-center justify-center mt-4 align-middle">
                      <Explore
                        buttonText={card.More}
                        modalContent={card.components}
                        onButtonClick={handleButtonClick}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {modalContent && (
          <Modal2 content={modalContent} onClose={terminateModal} />
        )}
      </div>
    </>
  );
};

export default Services;
