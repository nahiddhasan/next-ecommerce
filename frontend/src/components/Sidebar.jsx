"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiCog } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import DarkMode from "./DarkMode";

const sidebarItem = [
  { title: "Home", path: "/dashboard", Icon: FaHome },
  { title: "Products", path: "/dashboard/products", Icon: HiCog },
  { title: "Add Product", path: "/dashboard/addproduct", Icon: HiCog },
  { title: "Orders", path: "/dashboard/orders", Icon: HiCog },
];

const Sidebar = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div
      className={` ${
        open ? "hidden" : "flex"
      }  lg:w-[20%]  flex-col h-screen p-4 py-6 border-r dark:border-hover `}
    >
      {/* logo */}
      <div className="flex items-center gap-4 text-3xl mb-4 flex-1">
        <MdSpaceDashboard className="text-lime-600" />
        <span>Dashobard</span>
      </div>
      {/* Sidebar items */}
      <div className="flex flex-col flex-[7] overflow-y-auto">
        {/* sidebar item */}
        {sidebarItem.map((item, index) => {
          const { title, path, Icon, img } = item;
          return (
            <Link
              key={title}
              href={path}
              onClick={() => setActive(index)}
              className={`flex gap-3 items-center p-2 px-4 rounded-2xl ${
                active === index && "dark:bg-hover bg-slate-100"
              } dark:hover:bg-hover hover:bg-slate-100 transition-all duration-200`}
            >
              {Icon ? (
                <Icon className="text-2xl " />
              ) : (
                <Image src={img} height={24} width={24} alt="icon" />
              )}
              <span>{title}</span>
            </Link>
          );
        })}
      </div>
      {/* profile section  */}
      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="rounded-full overflow-hidden">
          <Image
            src={data?.user.image || "/img/noavatar.jpg"}
            height={85}
            width={85}
            alt="profile"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-lg text-center">{data?.user.name}</span>
          <span className="text-textSecondery text-sm text-center">
            {data?.user.email}
          </span>
        </div>

        <div className="flex items-center justify-between w-full relative">
          <Link href="/dashboard/settings" onClick={() => setActive(null)}>
            <HiCog className="text-xl cursor-pointer" />
          </Link>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
