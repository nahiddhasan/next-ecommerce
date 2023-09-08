"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center w-[500px] h-[500px bg-slate-500]">
      <button className="" onClick={() => signIn("google")}>
        login with google
      </button>
    </div>
  );
};

export default Login;
