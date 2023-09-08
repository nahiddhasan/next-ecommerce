import Image from "next/image";

const NewItem = () => {
  return (
    <div className=" w-full  flex items-center bg-black">
      {/* main container */}
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex flex-col items-center justify-center  ">
        {/* item heading */}
        <div className="p-14 md:p-24 flex gap-4 items-center justify-center text-white flex-col">
          <span className="text-sm p-1 px-3 bg-white text-black rounded-full">
            new
          </span>
          <h1 className="text-4xl lg:text-[65px] text-center">
            Introducing Model 001
          </h1>
        </div>
        {/* image container */}
        <div className="relative w-[95%] md:w-full h-[60vh] md:h-[75vh] lg:h-screen">
          <Image src="/img/new.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
