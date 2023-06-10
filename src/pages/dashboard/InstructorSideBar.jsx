import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase, HiOutlinePlus, HiOutlinePlusCircle } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
// import { MdMenu } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
const InstructorSideBar = () => {
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
           h-full min-h-screen"
        >
          <div className="flex items-center font-medium border-b py-3 border-slate-300 mx-6">
        {/* {!open && <span className="text-xl mt-3 whitespace-pre">Hi,</span>} */}
        {!open && <img className="w-20 rounded-full" src={user.photoURL} />}
    {open && <span className="text-xl mt-3 whitespace-pre">Hi,{user?.displayName}</span>
  }
  
          </div>
  
          <div className="flex flex-col  h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              <li>
                <NavLink to={"/"} className="link">
                  <AiOutlineAppstore size={23} className="min-w-max" />
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/instructor-dashboard/add-class"} className="link">
                  <HiOutlinePlusCircle size={23} className="min-w-max" />
                  Add a class
                </NavLink>
              </li>
              
  
              
              
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
                    y: 10,
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
}

export default InstructorSideBar