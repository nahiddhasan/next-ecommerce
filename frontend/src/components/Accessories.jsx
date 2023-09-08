import Image from "next/image";

const Accesories = () => {
  return (
    <div className=" w-full py-6 lg:py-12  flex items-center bg-black">
      <div className=" px-4 lg:px-8 w-[1400px] flex flex-col gap-4 mx-auto  text-white">
        {/* top heading container  */}
        <h1 className="text-2xl">Accerioes</h1>

        {/* Main product container */}
        <div className="flex flex-col lg:flex-row gap-4 h-screen md:h-[100vh] text-black">
          {/* Left  */}
          <div className="flex-[1] flex flex-row gap-2 md:gap-4 lg:flex-col h-full">
            {/* Left top */}

            <div className="bg-[#f2f2f2] relative cursor-pointer rounded-2xl  h-[200px] md:h-[400px] lg:h-1/2 w-1/2 lg:w-full flex flex-col">
              {/* Image container */}
              <div className="relative h-full w-full">
                <Image src="/img/a1.jpg" fill alt="" className="object-cover" />
              </div>

              {/* info container */}
              <div className="h-full w-full  absolute flex justify-end flex-col top-0 p-4 px-8">
                {/* product info */}
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base">Stretch Laces</span>
                  <span className="text-gray-600 group-hover/img:text-white">
                    $12
                  </span>
                </div>
              </div>
            </div>
            {/* left Bottom  */}

            <div className="bg-[#f2f2f2] relative cursor-pointer rounded-2xl  h-[200px] md:h-[400px] lg:h-1/2 w-1/2 lg:w-full flex flex-col">
              {/* Image container */}
              <div className="relative h-full w-full">
                <Image src="/img/a2.jpg" fill alt="" className="object-cover" />
              </div>

              {/* info container */}
              <div className="h-full w-full absolute flex justify-end flex-col top-0 p-4 px-8">
                {/* product info */}
                <div className="flex items-center justify-between ">
                  <span className="text-sm md:text-base">Everyday Mask</span>
                  <span className="text-gray-600">$12</span>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="bg-[#f2f2f2] flex-[2] h-full rounded-2xl relative overflow-hidden cursor-pointer">
            {/* Image container */}
            <div className="relative h-[90%] w-full">
              <Image src="/img/a3.jpg" fill alt="" className="object-cover" />
            </div>

            {/* info container */}
            <div className="w-full flex justify-end flex-col top-0 p-4 px-8">
              {/* product info */}
              <div className="flex items-center justify-between group-hover/img:text-white">
                <span className="text-sm md:text-base">Gift Card</span>
                <button className="p-1 md:p-2 px-4 bg-yellow-300 hover:bg-yellow-400 transition-all text-black text-lg rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesories;
