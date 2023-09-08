import Image from "next/image";

const MenHover = () => {
  return (
    <div className="w-[98vw] h-[calc(100vh-5.25rem)] bg-[#f2f2f2] fixed top-12 left-0">
      <div className="flex items-center justify-center h-full ">
        {/* items */}
        <div className="flex justify-center gap-10">
          {/* item */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative  w-[300px] h-[400px] rounded-2xl overflow-hidden">
              <Image src="/img/men1.jpg" fill alt="" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <button className="ring-1 ring-gray-600 rounded-full px-6 py-2 text-xl">
                Model 000
              </button>
              <span className="text-gray-500">Cushoni Comfort</span>
            </div>
          </div>

          {/* item */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative  w-[300px] h-[400px] rounded-2xl overflow-hidden">
              <Image src="/img/men2.jpg" fill alt="" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <button className="ring-1 ring-gray-600 rounded-full px-6 py-2 text-xl">
                Model 001
              </button>
              <span className="text-gray-500">Supportive & Durable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenHover;
