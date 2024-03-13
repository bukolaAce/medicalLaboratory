const CallToAction = () => {
  return (
    <>
     <div className="bg-gray-400 text-[#333] p-8 w-full rounded font-[sans-serif] min-h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="sm:text-5xl text-3xl font-extrabold">Try using our templates</h1>
        <div className="my-10">
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
        <hr className="border-[#333]" />
        <div className="mt-10 flex max-sm:flex-col justify-center sm:gap-6 gap-4">
          <button type="button" className="px-6 py-3 rounded text-white text-sm tracking-wider font-semibold border border-[#333] outline-none bg-[#333] hover:bg-transparent hover:text-[#333] transition-all duration-300">Get started</button>
          <button type="button" className="px-6 py-3 rounded text-sm tracking-wider font-semibold border border-[#333] outline-none bg-transparent hover:bg-[#333] hover:text-white transition-all duration-300">Learn more</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CallToAction;
