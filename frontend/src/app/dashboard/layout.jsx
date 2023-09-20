import { Poppins } from "next/font/google";
import Sidebar from "../../components/Sidebar";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const layout = ({ children }) => {
  return (
    <div
      className={`${poppins.className} flex dark:bg-dark dark:text-textPrimary h-screen w-full transition-all duration-200`}
    >
      <Sidebar />
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default layout;
