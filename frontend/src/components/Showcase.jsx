import Image from "next/image";

const Showcase = () => {
  return (
    <div className=" w-full py-6 lg:py-12  flex items-center">
      <div className=" px-4 lg:px-8 w-[1400px] flex flex-col gap-6 mx-auto">
        {/* top container */}
        <div className="container__gird  rounded-2xl grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] h-full overflow-hidden ring-1 ring-gray-400">
          {/* left */}
          <div className="">
            {/* image */}
            <div className="relative h-full w-full">
              <Image src="/img/sp1.jpg" className="object-cover" fill alt="" />
            </div>
          </div>
          {/* center */}
          <div className="py-32 md:py-60 bg-black text-white flex items-center justify-center flex-col gap-4">
            <button className="bg-white p-1 px-2 md:px-3 rounded-full text-black">
              Our Story
            </button>
            <h1 className="text-5xl md:text-6xl lg:text-8xl">Brand</h1>
          </div>
          {/* right */}
          <div className="g flex items-center justify-center flex-col p-4 gap-6">
            <p className="text-2xl md:text-4xl text-center">
              Based in New York City, Atoms began with an idea: make a shoe
              you’d want to wear everyday.
            </p>
            <button className="p-2 px-4 bg-black text-white rounded-full ">
              Learn More
            </button>
          </div>
        </div>
        {/* bottom container */}
        <div className="container__gird rounded-2xl md:grid-cols-[repeat(3,1fr)] h-full overflow-hidden ring-1 ring-gray-400">
          {/* left */}
          <div className="">
            {/* image */}
            <div className="relative h-full w-full">
              <Image src="/img/sp2.jpg" className="object-cover" fill alt="" />
            </div>
          </div>
          {/* center */}
          <div className="py-32 md:py-60 bg-black text-white flex items-center justify-center flex-col gap-4">
            <button className="bg-white p-1 px-2 md:px-3 rounded-full text-black">
              Features
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-center ">
              Humans of NewYork
            </h1>
          </div>
          {/* right */}
          <div className="g flex items-center justify-center flex-col p-4 gap-6">
            <p className="text-2xl md:text-4xl text-center">
              Read our co-founder Sidra’s story about struggle, chasing dreams,
              and making shoes.
            </p>
            <button className="p-2 px-4 bg-black text-white rounded-full ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
