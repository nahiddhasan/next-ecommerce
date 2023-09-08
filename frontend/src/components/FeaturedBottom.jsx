import Image from "next/image";

const FeaturedBottom = () => {
  return (
    <div className=" w-full py-6 lg:py-12  flex items-center bg-black">
      <div className=" px-4 lg:px-8 w-[1400px] flex flex-col gap-4 mx-auto  text-white">
        {/* top heading container  */}
        <h1 className="text-2xl">Explore Model 000</h1>

        {/* Main product container */}
        <div className="flex flex-col lg:flex-row gap-4 h-screen md:h-[100vh] text-black">
          {/* Left  */}
          <div className="flex-[1] flex flex-row gap-2 md:gap-4 lg:flex-col h-full">
            {/* Left top */}

            <div className="h-[180px] md:h-[200px] lg:h-1/2 w-1/2 lg:w-full flex flex-col">
              <div className=" h-full rounded-2xl relative overflow-hidden group/img cursor-pointer">
                {/* Image container */}
                <div className="relative h-full w-full group-hover/img:hidden">
                  <Image
                    src="/img/p1-1.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                {/* hover image */}
                <div className="invisible opacity-0 group-hover/img:visible group-hover/img:opacity-100 duration-300 transition-all relative h-full w-full">
                  <Image
                    src="/img/p1.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                {/* info container */}
                <div className="h-full w-full  absolute flex justify-end flex-col top-0 p-4 px-8">
                  {/* product info */}
                  <div className="flex items-center justify-between group-hover/img:text-white">
                    <span className="text-sm md:text-base">
                      Model 0001: Black
                    </span>
                    <span className="text-gray-600 group-hover/img:text-white">
                      $175
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* left Bottom  */}

            <div className="h-[180px] md:h-[200px] lg:h-1/2 w-1/2 lg:w-full flex flex-col">
              <div className=" h-full rounded-2xl relative overflow-hidden group/img cursor-pointer">
                {/* Image container */}
                <div className="relative h-full w-full group-hover/img:hidden">
                  <Image
                    src="/img/p1-1.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                {/* hover image */}
                <div className="invisible opacity-0 group-hover/img:visible group-hover/img:opacity-100 duration-300 transition-all relative h-full w-full">
                  <Image
                    src="/img/p1.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                {/* info container */}
                <div className="h-full w-full absolute flex justify-end flex-col top-0 p-4 px-8">
                  {/* product info */}
                  <div className="flex items-center justify-between group-hover/img:text-white">
                    <span className="text-sm md:text-base">
                      Model 0001: Black
                    </span>
                    <span className="text-gray-600 group-hover/img:text-white">
                      $175
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="flex-[2] h-full rounded-2xl relative overflow-hidden group/img cursor-pointer">
            {/* Image container */}
            <div className="relative h-full w-full group-hover/img:hidden">
              <Image src="/img/p1-1.jpg" fill alt="" className="object-cover" />
            </div>
            {/* hover image */}
            <div className="invisible opacity-0 group-hover/img:visible group-hover/img:opacity-100 duration-300 transition-all relative h-full w-full">
              <Image src="/img/p1.jpg" fill alt="" className="object-cover" />
            </div>
            {/* info container */}
            <div className="h-full w-full  absolute flex justify-end flex-col top-0 p-4 px-8">
              {/* product info */}
              <div className="flex items-center justify-between group-hover/img:text-white">
                <span className="text-sm md:text-base">Model 0001: Black</span>
                <button className="p-2 px-4 bg-yellow-300 hover:bg-yellow-400 transition-all text-black text-lg rounded-full">
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

export default FeaturedBottom;
