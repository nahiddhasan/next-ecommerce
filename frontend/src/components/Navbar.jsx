"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import MenHover from "./MenHover";
import MobileMenu from "./MobileMenu";
import WomenHover from "./WomenHOver";
const Navbar = () => {
  const session = useSession();
  const user = session?.data?.user;
  const { quantity } = useSelector((state) => state.cart);

  return (
    <div className=" w-full  h-12 sticky top-0 left-0 lg:sticky lg:top-9  nav__bg backdrop-blur-[10px] flex items-center z-10">
      <div className="px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-between ">
        {/* Mobile menu */}
        <div className="lg:hidden flex-[1]">
          <MobileMenu session={session} signOut={signOut} />
        </div>
        {/* Logo  */}
        <div className="w-max cursor-pointer flex-[1] flex items-center justify-center lg:justify-start">
          <Link href="/" className=" flex gap-2 items-center">
            <Image src="/img/logo.svg" height={20} width={20} alt="" />
            <span className="text-xl font-bold">Logo</span>
          </Link>
        </div>

        {/* cart Icon for mobile  */}
        <div className="lg:hidden w-max cursor-pointer flex-[1] relative flex justify-end">
          <Cart quantity={quantity} />
        </div>
        {/* menu item  */}
        <div className="hidden lg:flex gap-4 items-center justify-center flex-[2]">
          <div className="group/men ">
            <span className="py-4 cursor-pointer">Men</span>
            <div className="invisible opacity-0 group-hover/men:visible group-hover/men:opacity-100 duration-500 transition-all">
              <MenHover />
            </div>
          </div>
          <div className="group/women ">
            <span className="py-4 cursor-pointer">Women</span>
            <div className="invisible opacity-0 group-hover/women:visible group-hover/women:opacity-100 duration-500 transition-all ">
              <WomenHover />
            </div>
          </div>
          <span className="py-4 cursor-pointer">Accessories</span>{" "}
          <span className="py-4 cursor-pointer">About</span>{" "}
          <Link
            className="bg-[#e9effc] py-1 px-4 rounded-full text-blue-500 text-sm text-center  "
            href="/"
          >
            Shoe Finder Quiz
          </Link>
        </div>
        {/* menu options */}
        <div className="hidden lg:flex  items-center flex-[1] justify-end">
          <div className="relative p-4 cursor-pointer group/support">
            <span>Support</span>
            {/* support hover item */}
            <div className="invisible opacity-0 group-hover/support:visible group-hover/support:opacity-100 sidebar duration-500 transition-all flex  w-max gap-2 bg-white ring-1 ring-gray-400 p-4 rounded-md flex-col absolute top-12 right-0">
              <Link className="hover:underline" href="/">
                Exchange/Return
              </Link>
              <Link className="hover:underline" href="/">
                Order Status
              </Link>
              <Link className="hover:underline" href="/">
                FAQ
              </Link>
              <Link className="hover:underline" href="/">
                Help
              </Link>
              <Link className="hover:underline" href="/">
                Contuct Us
              </Link>
            </div>
          </div>
          {/* Profile icon */}
          <div className="cursor-pointer relative group/profile px-2 py-4 ">
            <Image
              src={(user && user.image) || "/img/noavatar.jpg"}
              className="object-cover rounded-full"
              width={25}
              height={25}
              alt=""
            />

            {/* profile hover item */}

            <div className="invisible opacity-0 group-hover/profile:visible group-hover/profile:opacity-100 transition-all duration-500  w-max flex gap-2 bg-white ring-1 ring-gray-400 p-4 rounded-md flex-col absolute top-12 right-0">
              <Link className="hover:underline" href="/">
                My Orders
              </Link>
              <Link className="hover:underline" href="/">
                Profile and Security
              </Link>
              <Link className="hover:underline" href="/">
                Addresses
              </Link>
              {session.status === "authenticated" ? (
                <span className="hover:underline" onClick={() => signOut()}>
                  Logout
                </span>
              ) : (
                <Link className="hover:underline" href="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
          {/* cart Icon  */}
          <div className="cursor-pointer p-4 ">
            <Cart quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
