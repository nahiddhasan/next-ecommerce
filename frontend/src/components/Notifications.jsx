"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const notifications = [
  {
    id: 1,
    message: "Free Us shipping on orders $250+",
    bg: "#181d1b",
  },
  {
    id: 2,
    message: "Intoducing Tropical green 001",
    bg: "#077a52",
    button: "Shop Now",
  },
];

const Notifications = () => {
  const [currentSlider, setCurrentSlider] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlider((prev) =>
          prev === notifications.length - 1 ? 0 : prev + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlider((prev) =>
        prev === notifications.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSlider((prev) =>
        prev - 1 < 0 ? notifications.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className="z-10 lg:sticky top-0 left-0 h-9 text-[12px] p-4 text-white flex items-center justify-center"
      style={{
        backgroundColor: `${notifications[currentSlider].bg}`,
      }}
    >
      <div className="w-full flex gap-4 items-center justify-between cursor-grab">
        {/* prev button  */}
        <div
          className="cursor-pointer"
          direction="left"
          onClick={() => handleClick("left")}
        >
        <Image  src="/img/l-arrow.svg" height={20} width={20} alt="" />
        
        </div>
        <div>
          <span className="">{notifications[currentSlider].message} </span>
          {notifications[currentSlider].button && (
            <span className="underline font-bold cursor-pointer">
              {notifications[currentSlider].button}
            </span>
          )}
        </div>
        {/* next button  */}
        <div
          className="cursor-pointer "
          direction="right"
          onClick={() => handleClick("right")}
        >
         <Image  src="/img/r-arrow.svg" height={20} width={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
