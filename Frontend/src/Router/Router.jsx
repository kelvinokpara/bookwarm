import { Routes, Route } from "react-router";
import Homepage from "../Pages/Homepage";
import Accounts from "../Pages/Accounts";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/accounts"} element={<Accounts />} />
    </Routes>
  );
};

export default Router;
