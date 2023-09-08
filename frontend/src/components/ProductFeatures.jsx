"use client";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    question: "What about your services",
    answer:
      "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  },
  {
    id: 2,
    question: "What about your services",
    answer:
      "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  },
  {
    id: 3,
    question: "What about your services",
    answer:
      "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  },
];

const ProductFeature = () => {
  const [open, setOpen] = useState(null);
  const handleClick = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="py-2 flex flex-col ">
      {/* Items  */}
      <div className="w-full ">
        {/* item  */}
        {items.map((item, index) => (
          <div key={item.id} className="p-2 w-full">
            <div
              onClick={() => handleClick(index)}
              className=" p-2 flex items-center justify-between cursor-pointer"
            >
              <h1 className="text-md ">{item.question}</h1>
              <Image
                src="/img/add.svg"
                height={16}
                width={16}
                alt=""
                className={` bg-slate-200 rounded-full ${
                  open === index && " rotate-45"
                } text-xl transition-all duration-200`}
              />
            </div>
            <hr />
            {open === index && <p className="p-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeature;
