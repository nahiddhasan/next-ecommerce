import React from "react";
import Login from "../components/Login";
import { getAuthSession } from "../utils/auth";

const ProtectedLayout = async ({ children }) => {
  const session = await getAuthSession();
  if (!session) {
    return <Login />;
  }
  return <div>{children}</div>;
};

export default ProtectedLayout;
