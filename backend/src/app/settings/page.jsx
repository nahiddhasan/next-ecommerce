"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <div>
      <h1>Settings</h1>
      <p className="cursor-pointer" onClick={handleSignOut}>
        LogOut
      </p>
    </div>
  );
};

export default page;
