"use client";
import Image from "next/image";
import { useState } from "react";

const MobileSlider = ({ images }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlider((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="z-10 lg:sticky top-0 left-0 h-[80vh] text-[12px] text-white flex items-center justify-center">
      <div className="w-full h-full flex gap-4 items-center justify-between cursor-grab">
        <div className="h-full w-full flex flex-col gap-4 relative">
          {/* prev button  */}
          <div
            className="absolute top-0 bottom-0 m-auto left-2  cursor-pointer h-5 w-5 rounded-full bg-slate-400 "
            direction="left"
            onClick={() => handleClick("left")}
          >
            <Image src="/img/l-arrow.svg" height={20} width={20} alt="" />
          </div>

          <div className="relative h-full w-full -z-10">
            <Image
              src={images[currentSlider]}
              fill
              alt=""
              className="object-cover"
            />
          </div>
          {/* next button  */}
          <div
            className="absolute top-0 bottom-0 m-auto right-2 cursor-pointer h-5 w-5 rounded-full bg-slate-400"
            direction="right"
            onClick={() => handleClick("right")}
          >
            <Image src="/img/r-arrow.svg" height={20} width={20} alt="" />
          </div>

          <div
            className={`absolute left-0 right-0 m-auto bottom-4 flex items-center justify-center gap-2`}
          >
            {images.map((item, index) => (
              <div
                key={item}
                className={`h-2 w-2 rounded-[100%]  ${
                  currentSlider === index ? "bg-slate-400" : "bg-slate-800"
                } `}
                onClick={() => setCurrentSlider(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSlider;
