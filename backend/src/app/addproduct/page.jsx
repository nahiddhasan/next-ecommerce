"use client";
import React, { useState } from "react";
import styles from "../style";

const page = () => {
  const [featured, setFeatured] = useState("no");
  const handleSubmit = () => {};
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
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Desc:</label>
          <input
            type="text"
            placeholder="Product Desc"
            className={styles.addProductInput}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Color:</label>
          <input
            type="text"
            placeholder="Product Color seperare with comma"
            className={styles.addProductInput}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Size:</label>
          <input
            type="text"
            placeholder="Product Size seperate with comma"
            className={styles.addProductInput}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Price:</label>
          <input
            type="text"
            placeholder="Product Price"
            className={styles.addProductInput}
          />
        </div>

        <div className="w-full gap-2 flex items-center">
          <label>Product Images:</label>
          <input type="file" />
        </div>
        <div className="w-full gap-2 flex items-center">
          <label>Is Featured:</label>
          <select name="" onChange={(e) => setFeatured(e.target.value)}>
            <option value="no" selected>
              No
            </option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {featured === "yes" && (
          <>
            <div className="w-full gap-2 flex items-center">
              <label>Display Image:</label>
              <input type="file" />
            </div>

            <div className="w-full gap-2 flex items-center">
              <label>Hover Image:</label>
              <input type="file" />
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
