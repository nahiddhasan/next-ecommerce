"use client";
import Image from "next/image";
import { useState } from "react";

const sponsors = [
  {
    id: 1,
    desc: "“The most thoughtfully designed sneakers ever.”",
    img: "/img/s1.png",
  },
  {
    id: 3,
    desc: "“2 The most thoughtfully designed sneakers ever.”",
    img: "/img/s2.png",
  },
  {
    id: 1,
    desc: "“3 The most thoughtfully designed sneakers ever The most thoughtfully designed sneakers ever.”",
    img: "/img/s3.png",
  },
];

const Sponsor = () => {
  const [item, setItem] = useState(1);
  return (
    <div className=" w-full my-6 lg:my-12 flex items-center">
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-center  ">
        <div className="w-full rounded-2xl p-[2rem] px-[1rem]  md:p-[6rem] flex gap-4 flex-col items-center justify-center bg-[#f2f2f2]">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center">
            {sponsors[item].desc}
          </h2>
          {/* Image container  */}

          <div className="w-full md:w-[70%] flex gap-4 items-center justify-around p-4  ">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                onClick={() => setItem(index)}
                className={`relative w-1/3 h-[50px] opacity-60 hover:opacity-80 ${
                  item === index && "!opacity-100"
                }  transition-all`}
              >
                <Image
                  src={sponsor.img}
                  fill
                  alt=""
                  className="object-contain "
                />
                {item === index && (
                  <div className="h-2 w-2 rounded-full bg-black absolute md:-bottom-8 -bottom-4 left-[50%]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
