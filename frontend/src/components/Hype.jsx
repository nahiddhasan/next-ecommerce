import Image from "next/image";

const Hype = () => {
  return (
    <div className=" w-full my-6 lg:my-12 flex items-center">
      {/* main container */}
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-center  ">
        <div className="flex flex-col-reverse md:flex-row w-full gap-2  ">
          {/* left  */}
          <div className="flex flex-col  lg:flex-[1.5] bg-[#f2f2f2] rounded-2xl overflow-hidden">
            <h1 className="text-3xl lg:text-[65px] p-12 py-12 lg:py-[75px] text-center">
              The Hype is real...
            </h1>
            <div className="flex flex-col md:flex-row gap-2 h-full lg:h-[65%]">
              {/* left side */}
              <div className="relative w-full lg:w-1/2 min-h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/hype1.jpg"
                  fill
                  alt=""
                  className="object-cover"
                />
              </div>
              {/* right side  */}
              <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
                <div className="flex gap-2">
                  <span>Zachary C. </span>
                  <div className="flex ">
                    <Image src="/img/star.svg" height={16} width={16} alt="" />
                    <Image src="/img/star.svg" height={16} width={16} alt="" />
                    <Image src="/img/star.svg" height={16} width={16} alt="" />
                    <Image src="/img/star.svg" height={16} width={16} alt="" />
                    <Image src="/img/star.svg" height={16} width={16} alt="" />
                  </div>
                </div>
                <p className="text-2xl p-4 px-6 text-center">
                  “Stylish simple most comfortable shoes. I’m buying a second
                  pair. Wear it daily.”
                </p>
              </div>
            </div>
          </div>
          {/* right main*/}
          <div className="lg:flex-[1] flex flex-col justify-between rounded-2xl h-[800px] overflow-hidden bg-[#f2f2f2]">
            {/* image  */}
            <div className="relative w-full h-full ">
              <Image
                src="/img/hype2.jpg"
                className="object-cover"
                fill
                alt=""
              />
            </div>
            {/* info */}
            <div className=" p-4 flex justify-between items-center ">
              <h1 className="text-xl">Model 000: Navy</h1>
              <button className="p-2 px-4 bg-yellow-300 hover:bg-yellow-400 transition-all text-xl rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hype;
