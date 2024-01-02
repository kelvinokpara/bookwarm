import { Routes, Route } from "react-router";
import Homepage from "../Pages/Homepage";
import Accounts from "../Pages/Accounts";
import Layout from "../Components/Layouts/Layout";
import ToastLayout from "../Components/Layouts/ToastLayout";
import NotFound from "../Pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path={"/accounts"}
        element={
          <ToastLayout>
            <Accounts />
          </ToastLayout>
        }
      />
      <Route
        path={"/accounts/:id"}
        element={
          <ToastLayout>
            <Accounts />
          </ToastLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
