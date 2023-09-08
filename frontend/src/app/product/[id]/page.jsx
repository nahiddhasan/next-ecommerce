"use client";
import MobileSlider from "@/components/MobileSlider";
import ProductFeature from "@/components/ProductFeatures";
import { addProduct } from "@/redux/cartRedux";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const product = {
  _id: 1,
  name: "Model 000",
  des: "Cushiony Comfort",
  price: 145,
  images: [
    "/img/slider2.jpg",
    "/img/slider1.jpg",
    "/img/slider3.jpg",
    "/img/p1.jpg",
  ],
  colors: ["black", "red", "white", "yellow", "green"],
  sizes: [3, 4, 5],
};

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [selectedcolor, setSelectedcolor] = useState(0);
  const [color, setColor] = useState(product.colors[selectedcolor]);
  const [size, setSize] = useState(null);
  const handleClick = () => {
    if (size == null) {
      return toast.error("You must select a size");
    }

    dispatch(
      addProduct({
        id: product._id,
        color: color,
        size: size,
        price: product.price,
        img: product.images[0],
        name: product.name,
        quantity: 1,
      })
    );
    toast.success("Product added to cart successfully");
  };

  const handleColor = (index, color) => {
    setColor(color);
    setSelectedcolor(index);
  };
  return (
    <div className=" w-full my-2 lg:my-12 flex items-center">
      {/* main container */}
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex">
        {/* left side for showing item picture */}
        <div className="flex-[2] hidden md:flex gap-4 flex-wrap">
          {product.images.map((image, index) => (
            <div key={index} className=" w-[45%] h-[400px] relative">
              <Image src={image} fill alt="" className="object-cover" />
            </div>
          ))}
        </div>
        {/* Right side for Product information */}
        <div className="flex-1 flex flex-col">
          {/* product info */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-xl">{product.name}</h2>
              <span className="text-sm text-gray-400">{product.des}</span>
            </div>
            <span className="text-xl">${product.price}</span>
          </div>
          {/* stars */}
          <div className="flex gap-2 mt-2">
            <div className="flex gap-1">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
            <div className="flex gap-1 text-[12px]">
              <span>4.7</span>
              <span>(1250)</span>
            </div>
          </div>
          {/* mobile slider for showing the product images */}
          <div className="md:hidden">
            <MobileSlider images={product.images} />
          </div>
          {/* product details  */}
          <div>
            {/* color */}
            <div className="flex flex-col gap-1">
              <span className="capitalize">
                Color: {product.colors[selectedcolor]}
              </span>
              <div className="flex gap-4 mb-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full ring-2 ${
                      selectedcolor === index && " scale-125"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColor(index, color)}
                  />
                ))}
              </div>
            </div>
            {/* size */}
            <div className="flex flex-col gap-2">
              <span>Size</span>
              <select
                className="p-3 rounded-md"
                name="Select Size"
                id=""
                onChange={(e) => setSize(e.target.value)}
              >
                <option className="p-4" value="" selectedColor>
                  Select Size
                </option>
                {product.sizes.map((size, index) => (
                  <option key={index} className="p-4" value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            {/* add to cart button  */}
            <button
              className="w-full my-6 p-2 bg-black text-white rounded-full"
              onClick={handleClick}
            >
              Add to Cart
            </button>
            {/* product description  */}
            <p>
              Experience a whole new level of comfort with Atoms Model 000.
              Featuring a classic style, once you slide them on you’ll see they
              are unlike any shoe you’ve ever worn. With more than 100 thousand
              pairs sold since our launch in 2019, our top seller Model 000 has
              become the ideal everyday shoes.
            </p>

            {/* features */}
            <div>
              <ProductFeature />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
