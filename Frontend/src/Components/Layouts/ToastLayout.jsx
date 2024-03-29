import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastLayout = ({ children }) => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </div>
  );
};

export default ToastLayout;
