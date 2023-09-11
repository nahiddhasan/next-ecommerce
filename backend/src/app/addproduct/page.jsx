"use client";
import Image from "next/image";
import React, { useState } from "react";
import upload from "../../utils/upload";
import styles from "../style";

const page = () => {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: "",
  });

  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [display, setDisplay] = useState();
  const [hover, setHover] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setPrice(e.target.value.split(","));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await upload(display);
  };

  return (
    <div className="p-4 py-8">
      <h1 className="text-3xl font-bold">Add Product</h1>
      <form
        className="flex items-center flex-wrap gap-6 py-6 w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-[40%] gap-2 flex items-center">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Product Title"
            className={styles.addProductInput}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Desc:</label>
          <input
            type="text"
            placeholder="Product Desc"
            className={styles.addProductInput}
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Color:</label>
          <input
            type="text"
            placeholder="Product Color seperare with comma"
            className={styles.addProductInput}
            onChange={handleColor}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Size:</label>
          <input
            type="text"
            placeholder="Product Size seperate with comma"
            className={styles.addProductInput}
            onChange={handleSize}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            className={styles.addProductInput}
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="w-full gap-2 flex items-center">
          <label>Product Images:</label>
          <div>
            <select
              name=""
              id=""
              className="dark:bg-textPrimary dark:text-black"
            >
              <option value="">Select Color</option>
              {color.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <input type="file" />
            <span className="bg-green-600 p-2 px-4 rounded-lg">Add</span>
          </div>
        </div>
        <div className="ring-1 ring-slate-400 h-20 w-full">
          <div className="h-full w-[20%] ring-1 ring-red-500">hello</div>
        </div>
        <div className="w-full gap-2 flex items-center">
          <label>Is Featured:</label>
          <select
            name=""
            onChange={(e) => setFeatured(e.target.value)}
            className="dark:bg-textPrimary dark:text-black"
          >
            <option value={false} selected>
              No
            </option>
            <option value={true}>Yes</option>
          </select>
        </div>

        {featured === "true" && (
          <>
            <div className="w-full gap-2 flex items-center">
              <span>Display Image:</span>
              <label htmlFor="display">
                <div className="relative w-14 h-14 ring-1 ring-red-400">
                  <Image
                    src="/img/noavatar.jpg"
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
              </label>
              <input
                id="display"
                type="file"
                onChange={(e) => setDisplay(e.target.files[0])}
                className="hidden"
              />
            </div>

            <div className="w-full gap-2 flex items-center">
              <span>Hover Image:</span>
              <input
                type="file"
                onChange={() => setDisplay(e.target.files[0])}
              />
            </div>
          </>
        )}
        <button type="submit" className="bg-green-600 p-2 px-4 rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default page;
