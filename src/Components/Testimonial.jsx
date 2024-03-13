const Testimonial = () => {
  const Testimonial = [
    {
      id: 1,
      img: "./images/adura.jpg",
      name: "Mr John",
      text: "I am extremely pleased with the accuracy and efficiency of the laboratory services provided. The professional team and state-of-the-art equipment exceeded my expectations. Highly recommended",
    },
    {
      id: 2,
      img: "./images/iyaolamide.jpg",
      name: "Olamide",
      text: "Grateful for exceptional consultancy at Effective Health and Wellness. Expert guidance navigated complex challenges with invaluable insights. Highly commend their professionalism and knowledge. A fantastic experience!",
    },
    {
      id: 3,
      img: "./images/olubro.jpg",
      name: "Gbemi Samson",
      text: "The mentoring has been invaluable. The guidance provided has significantly enhanced my skills and understanding of the industry. I appreciate the dedication and expertise of the mentors, making it a truly enriching experience",
    },
  ];
  return (
    <>
      <div
        className="bg-[#182b50] font-[sans-serif] text-white px-6 flex items-center justify-center py-[4.5rem] "
        id="testimonial"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto text-center ax-w-2xl i">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl md:leading-10">
              What our happy client say
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-white lg:text-xl">
              Patient Praise: Grateful Testimonials from Our Satisfied Clients
            </p>
          </div>
          <div className="grid max-w-6xl mx-auto md:grid-cols-3 md:gap-6 max-md:gap-10">
            {Testimonial.map((person) => {
              return (
                <>
                  <div className="max-w-[350px] h-auto rounded-md sm:p-8 p-4  mx-auto relative">
                    <div className="flex flex-col items-center">
                      <img
                        src={person.img}
                        className="w-24 h-24 border-2 border-[#d3dced] rounded-full shadow-xl"
                      />
                      <div className="mt-8 text-center">
                        <h4 className="text-sm font-extrabold text-white">
                          {person.name}
                        </h4>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-sm leading-relaxed text-white lg:text-lg">
                        {person.text}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
