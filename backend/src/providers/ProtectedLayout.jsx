import React from "react";
import { getAuthSession } from "../utils/auth";

const ProtectedLayout = async ({ children }) => {
  const session = await getAuthSession();

  return <div>{children}</div>;
  // if (session?.user.role === "ADMIN") {
  //   return <div>{children}</div>;
  // }
  // return (
  //   <>
  //     <h1>You are Not admin</h1>
  //     <Login />
  //   </>
  // );
};

export default ProtectedLayout;
