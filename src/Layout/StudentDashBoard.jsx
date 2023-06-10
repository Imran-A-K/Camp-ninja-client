import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import Sidebar from "../pages/dashboard/Sidebar";

const StudentDashBoard = () => {
  return (
  <div className="max-w-[1300px] mx-auto">
<Navbar></Navbar>
<div className="flex gap-5">
  <Sidebar />
  <div className="max-w-5xl flex-1 mx-auto py-4">
    <Outlet />
  </div>
</div>
<Footer></Footer>
</div> 
  );
};

export default StudentDashBoard;


