import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full my-12 flex items-center">
      {/* main Container  */}
      <div className="px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-center ">
        <div className="w-full p-10 bg-[#f2f2f2] md:bg-[url('/img/hero.jpg')] bg-center bg-cover bg-no-repeat rounded-2xl flex items-center justify-center ">
          {/* main container */}
          <div className="flex flex-col items-center justify-center">
            {/* image-container */}
            <div className="relative w-[250px] h-[300px] lg:w-[400px] lg:h-[350px]">
              <Image
                className="object-contain"
                src="/img/hero_main.jpg"
                fill
                alt="hero_img"
              />
            </div>
            {/* info-contaniner  */}
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex items-center flex-col leading-snug">
                <span className="text-sm font-bold tracking-widest uppercase">
                  Introducing
                </span>
                <h1 className="text-[32px] md:text-[48px] lg:text-[68px] text-center">
                  Tropical Green
                </h1>
                <span className="text-sm">
                  Refreshing, vibrant and fun vibes
                </span>
              </div>
              <button className="w-max px-8 p-4 bg-black text-white rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
