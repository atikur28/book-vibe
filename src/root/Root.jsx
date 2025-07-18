import { Outlet } from "react-router-dom";
import Footer from "../components/sharedComponents/Footer";
import Navbar from "../components/sharedComponents/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
