// import { getServerSession } from "next-auth/next";
// import { authOption } from "../../api/auth/[...nextauth]/route";
// const page = async () => {
//   const session = await getServerSession(authOption);
//   console.log(session);
//   return <div>page</div>;
// };

// export default page;

import "react-toastify/dist/ReactToastify.css";
const page = () => {
  return (
    <div>
      <button>hi</button>
    </div>
  );
};

export default page;
