"use client";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import { app } from "../../../utils/firebase";
import styles from "../../style";

import { AiOutlineCloudUpload } from "react-icons/ai";

const storage = getStorage(app);

const page = () => {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    catSlug: "",
  });
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [images, setImages] = useState([]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [display, setDisplay] = useState();
  const [hover, setHover] = useState(null);

  const [displayUrl, setDisplayUrl] = useState();
  const [hoverUrl, setHoverUrl] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const click = () => {
    uploadImages(images);
  };

  //handle images
  const uploadImages = (files) => {
    const promises = [];
    files.map((file) => {
      const name = new Date().getTime() + file.name;
      const sotrageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(sotrageRef, file);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(prog);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
            setImgUrl((prevState) => [...prevState, downloadURLs]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => toast.success("All images uploaded"))
      .then((err) => console.log(err));
  };

  //handle display image
  const handleDisplay = (file) => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDisplayUrl(downloadURL);
        });
      }
    );
  };

  //handle hover img
  const handleHover = (file) => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setHoverUrl(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images) {
      uploadImages(images);
    }

    if (display) {
      handleDisplay(display);
    }

    if (hover) {
      handleHover(hover);
    }

    try {
      const res = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          price: parseFloat(price),
          color,
          size,
          isFeatured,
          displayImage: displayUrl,
          hoverImage: hoverUrl,
          images: imgUrl,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
            required
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
            required
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
            required
            placeholder="Product Color seperare with comma"
            className={styles.addProductInput}
            onChange={handleColor}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Size:</label>
          <input
            type="text"
            required
            placeholder="Product Size seperate with comma"
            className={styles.addProductInput}
            onChange={handleSize}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Price:</label>
          <input
            type="number"
            required
            placeholder="Product Price"
            className={styles.addProductInput}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-[40%] gap-2 flex items-center">
          <label>Category</label>
          <input
            type="text"
            required
            placeholder="Product Category"
            className={styles.addProductInput}
            name="catSlug"
            onChange={handleChange}
          />
        </div>
        <div className="w-full gap-2 flex items-center">
          <span>Product Images:</span>
          <div className="flex gap-4 items-center">
            <label htmlFor="images">
              <div className="relative rounded-md ring-1 ring-neutral-400">
                {images && (
                  <AiOutlineCloudUpload className="cursor-pointer text-4xl" />
                )}
              </div>
            </label>

            <input
              type="file"
              required
              id="images"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImages([...e.target.files]);
                }
              }}
            />

            <div className="flex gap-4">
              {images.map((url) => (
                <div
                  onClick={() =>
                    setImages((prev) => prev.filter((item) => item !== url))
                  }
                >
                  <Image
                    src={URL.createObjectURL(url)}
                    height={100}
                    width={100}
                    alt="images"
                    className="object-contain rounded-md"
                  />
                </div>
              ))}
              <span onClick={click}>add</span>
            </div>
          </div>
        </div>

        <div className="w-full gap-2 flex items-center">
          <label>Is Featured:</label>
          <div
            className="w-12 h-7 ring-1 ring-neutral-400  rounded-md relative flex items-center  cursor-pointer "
            onClick={() => setIsFeatured(!isFeatured)}
          >
            <div
              className={`transition-all duration-1000 h-[24px] w-[24px] rounded-full dark:bg-white bg-black absolute ${
                isFeatured ? "right-[2px]" : "left-[2px]"
              } `}
            />
          </div>
        </div>

        {isFeatured && (
          <div className="flex gap-6 items-center justify-between">
            <div className="flex-1 gap-2 flex items-center">
              <span>Display Image:</span>
              <label htmlFor="display">
                <div className="relative rounded-md  ring-1 ring-neutral-400 overflow-hidden">
                  {display ? (
                    <Image
                      src={URL.createObjectURL(display)}
                      alt=""
                      height={100}
                      width={100}
                      className="object-contain "
                    />
                  ) : (
                    <AiOutlineCloudUpload className="cursor-pointer text-4xl" />
                  )}
                </div>
              </label>
              <input
                id="display"
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setDisplay(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
            </div>

            <div className="flex-1 gap-2 flex items-center">
              <span>Hover Image:</span>
              <label htmlFor="hover">
                <div className="relative rounded-md ring-1 ring-neutral-400 overflow-hidden">
                  {hover ? (
                    <Image
                      src={URL.createObjectURL(hover)}
                      alt=""
                      height={100}
                      width={100}
                      className="object-cover"
                    />
                  ) : (
                    <AiOutlineCloudUpload className="cursor-pointer text-4xl" />
                  )}
                </div>
              </label>
              <input
                id="hover"
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setHover(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
            </div>
          </div>
        )}
        <button type="submit" className="bg-green-600 p-2 px-4 rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default page;
