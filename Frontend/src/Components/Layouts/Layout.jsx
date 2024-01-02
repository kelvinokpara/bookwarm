import Navbar from "../Navbar.jsx";
import ToastLayout from "./ToastLayout.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <ToastLayout>
        <Navbar />
        <div>{children}</div>
      </ToastLayout>
    </div>
  );
};

export default Layout;
