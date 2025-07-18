import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
