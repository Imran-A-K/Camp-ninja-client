import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
// import { MdMenu } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";

const Sidebar = () => {
  const { user } = useAuthentication();
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
   
    {
      name: "Payments History",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div >
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[#f5f5f5] drop-shadow-md text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center font-medium border-b py-3 border-slate-300 mx-6">
      {!open && <span className="text-xl mt-3 whitespace-pre">Hi,</span>
}
  {open && <span className="text-xl mt-3 whitespace-pre">Hi,{user?.displayName}</span>
}
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                My Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className="link">
                <BsPerson size={23} className="min-w-max" />
                My Enrolled CLasses
              </NavLink>
            </li>
            

            {(open || isTabletMid) && (
              <div className="border-t py-5 border-slate-300 ">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Payments
                </small>
                
                <div className="flex flex-col gap-1">
                <li>
              <NavLink to={"/authentication"} className="link">
                <TbReportAnalytics size={23} className="min-w-max" />
                Payments History
              </NavLink>
            </li>
                </div>
              </div>
            )}
            
          </ul>
          
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 top-48 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <FaAngleDoubleRight size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
