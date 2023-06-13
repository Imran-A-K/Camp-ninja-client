import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/Footer"
import Navbar from "../pages/shared/Navbar/Navbar"

const Main = () => {
  return (
    <div className="dark:bg-gray-900">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main