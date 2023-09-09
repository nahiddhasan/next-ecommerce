"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const session = useSession();

  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center h-full w-full">
      <h1
        className="p-2 px4 ring-1 ring-orange-400 rounded-md cursor-pointer"
        onClick={() => signIn("google")}
      >
        Login with google
      </h1>
    </div>
  );
};

export default LoginPage;
