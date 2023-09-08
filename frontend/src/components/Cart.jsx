"use client";
import { addQuantity, decQuantity, removeItem } from "@/redux/cartRedux";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = ({ quantity }) => {
  const [open, setOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <div className="relative">
          <Image
            src="/img/cart.png"
            width={18}
            height={18}
            className="object-contain relative"
            alt=""
          />
          <span className="flex items-center justify-center w-3 h-3 absolute bottom-[-5px] right-[-3px] font-bold bg-black text-white p-[2px] rounded-full text-[10px]">
            {products.length}
          </span>
        </div>
      </div>

      <div
        className={`${open ? "block" : "hidden"} sidebar fixed  top-0 right-0 `}
      >
        <div className=" bg-white px-8 p-4  h-screen w-screen md:w-[50vw] z-10 box__shadow cursor-auto">
          {/* top  */}
          <div className="flex justify-between w-full h-max">
            {/* close icon */}
            <span>Cart</span>
            <span>
              <Image
                onClick={() => setOpen(false)}
                src="/img/remove.svg"
                width={20}
                height={20}
                alt=""
                className="object-contain cursor-pointer"
              />
            </span>
          </div>

          {/* top announce */}
          {products.length > 0 && (
            <div className=" flex flex-col items-center justify-center mb-4">
              <span className="text-center text-sm">
                {totalPrice() > 150 &&
                  "Congrast! This order gets free shipping."}
              </span>
              {/* line */}
              <div className="relative h-2 w-full ">
                <div className="absolute left-0 top-0 h-full w-full ring-1 ring-gray-500 my-2 rounded-full" />
                <div className="absolute left-0 top-0 h-full w-[100%] bg-black my-2 rounded-full" />
              </div>
            </div>
          )}

          <div className="flex flex-col justify-between h-[80%]">
            {/* Cart items */}
            <div className="flex-[2] flex flex-col gap-2 overflow-auto">
              {products.length > 0 ? (
                <>
                  {products?.map((product) => (
                    <div
                      key={product._id}
                      className="w-full flex gap-2 justify-between"
                    >
                      <div className="flex-1 relative flex items-center justify-center rounded-2xl overflow-hidden">
                        <Image
                          src={product.img}
                          fill
                          alt=""
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-[3] flex flex-col justify-between p-1 ">
                        <span>{product.name}</span>
                        <span className="text-sm">Color: {product.color}</span>
                        <span className="text-sm">Size:{product.size}</span>
                      </div>
                      <div className="flex-[2] flex items-center justify-between md:gap-4 gap-1">
                        <div className="flex gap-1 ring-1 ring-gray-500 rounded-full p-1">
                          {product.quantity > 1 ? (
                            <Image
                              onClick={() =>
                                dispatch(decQuantity({ id: product.id }))
                              }
                              src="/img/minus.svg"
                              width={12}
                              height={12}
                              alt=""
                              className="cursor-pointer"
                            />
                          ) : (
                            <Image
                              onClick={() => {
                                dispatch(removeItem({ id: product.id }));
                                toast.success("Product has been removed");
                              }}
                              src="/img/trash.svg"
                              width={12}
                              height={12}
                              alt=""
                              className="cursor-pointer"
                            />
                          )}

                          <span className="text-sm">{product.quantity}</span>
                          <Image
                            onClick={() =>
                              dispatch(addQuantity({ id: product.id }))
                            }
                            src="/img/add.svg"
                            width={14}
                            height={14}
                            alt=""
                            className="cursor-pointer"
                          />
                        </div>
                        <span>${product.price * product.quantity}</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                "No products available in your cart"
              )}
            </div>
            <hr className="my-4" />
            {/* Checkout  */}
            <div className="flex-[1] flex flex-col gap-4 ">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>${totalPrice()}</span>
              </div>
              {/* input container */}
              <div className="flex w-full items-center justify-between gap-4">
                <input
                  className="w-[65%] p-2 border-none outline-none ring-1 ring-gray-400 rounded-lg"
                  type="text"
                  placeholder="Discount code"
                />
                <span className="cursor-pointer">Apply Discount</span>
              </div>
              <button className="p-2 bg-black text-white rounded-full">
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
