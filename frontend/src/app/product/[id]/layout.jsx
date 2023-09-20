import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notifications";

const layout = ({ children }) => {
  return (
    <div>
      <Notifications />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
