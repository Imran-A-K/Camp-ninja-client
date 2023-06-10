import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import AdminSideBar from "../pages/dashboard/AdminSideBar";
const AdminDashBoard = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
<Navbar></Navbar>
<div className="flex gap-5">
  <AdminSideBar />
  <div className="max-w-5xl flex-1 mx-auto py-4">
    <Outlet />
  </div>
</div>
<Footer></Footer>
</div>
  )
}

export default AdminDashBoard