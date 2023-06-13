import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  
} from "react-icons/ai";

import {
  FaChalkboard,
  FaChalkboardTeacher,
  FaListAlt,
  FaUserAltSlash,
  
  FaUserNinja,
  FaUserPlus,
 
} from "react-icons/fa";
import useAuthentication from "../../../hooks/useAuthentication";
import { Link, NavLink } from "react-router-dom";
import { Button, Tooltip, Avatar } from "@mui/material";
import { HiHome } from "react-icons/hi";
import useRoleGetter from "../../../hooks/useRoleGetter";
import "./DarkMode.css";

import { HiMoon,HiSun } from "react-icons/hi2";


const Navbar = () => {

  // darkmode 
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const themeSwitcher = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  const { user, logOut, nav, setNav } = useAuthentication();
  const [userRole] = useRoleGetter()
  let isAdmin,isInstructor,isStudent =null;
  if(userRole)
  {
    if(user && userRole === "admin"){
      isAdmin = true
    }
    else if(user && userRole === "instructor"){
      isInstructor = true
    }
    else if(user && userRole == "student"){
      isStudent = true
    }
  }
  // console.log(isStudent)
  // console.log(userRole)
  const signOutHandler = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    //bg-[#f1f4f7]
    <div className=" bg-[#f5f5f5] dark:bg-slate-300 max-w-[1300px] mx-auto drop-shadow-md py-4 flex justify-between items-center px-4">
      <div className="flex gap-2 items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer hidden max-sm:block"
        >
          <AiOutlineMenu size={30} />
        </div>
        <FaUserNinja className="text-2xl max-sm:text-xl text-violet-600"></FaUserNinja>
        <h1 className="text-2xl max-sm:flex max-sm:text-xl sm:text-3xl lg:text-3xl md:px-2">
          Camp <span className="font-bold text-violet-600">Ninja</span>
        </h1>
        {!nav && <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={themeSwitcher}
                checked={theme === 'dark' ? true : false}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <HiSun className="sun" />
                <HiMoon className="moon" />
            </label>
        </div>}
      
      </div>

      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      <div>
        <ul className="hidden md:flex gap-7">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/instructors"
            >
              Instructors
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/classes"
            >
              Classes
            </NavLink>
          </li>
          {user && isAdmin &&(
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "actiVatedTab" : "defaultTab"
                }
                to="/admin-dashboard/manage-users"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {user && isInstructor &&(
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "actiVatedTab" : "defaultTab"
                }
                to="/instructor-dashboard/my-classes"
                
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {user && isStudent &&(
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "actiVatedTab" : "defaultTab"
                }
                to="/student-dashboard/my-selected-classes"
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="md:flex pr-4">
        {user ? (
          <div className="flex justify-center items-center gap-4">
            {isInstructor && <div className="badge max-sm:hidden badge-primary">Instructor</div>}
            <Tooltip
              disableFocusListener
              disableTouchListener
              arrow
              title={user?.displayName}
              sx={{
                // background: 'none', // Remove the background color
                // border: 'none', // Remove the border
                // boxShadow: 'none', // Remove the box shadow
                // padding: 0, // Remove any padding
              }}
            >
              <Button
              sx={{
                '&:hover': {
                  background: 'transparent', 
                  border: 'none', 
                  boxShadow: 'none', 
                  padding: 0, 
                },
                background: 'transparent', 
                border: 'none', 
                boxShadow: 'none', 
                padding: 0, 
              }}
              >
                <Avatar
                  alt={user?.displayName}
                  src={user?.photoURL}
                  sx={{ width: 45, height: 45,background: 'none', 
                
                 }}
                />
              </Button>
            </Tooltip>
            

            <button onClick={signOutHandler} className="btn bg-black -mt-1 max-sm:hidden text-slate-200  hover:bg-gray-800">
            Log Out
              {/* <div className="flex gap-4 pb-3 items-center justify-center">
                 <FaUserAltSlash />
              </div> */}
            </button>
          </div>
        ) : (
          <Link to="/login">
              <button className="btn bg-black max-sm:hidden text-slate-200 -mt-1 hover:bg-gray-800">
              Login
                {/* <div className="flex gap-4 pb-3 items-center justify-center">
                   <FaUserPlus />
                </div> */}
              </button>
            </Link>
          // <div className="flex mt-4">
            
          // </div>
        )}
      </div>

      {/* Side drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-40 duration-500 dark:bg-slate-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-10 cursor-pointer"
        />
        <div className="flex gap-4 items-center ml-4 mt-10">
          <FaUserNinja className="text-2xl text-violet-600"></FaUserNinja>
          <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2">
            Camp <span className="font-bold text-violet-600">Ninja</span>
          </h1>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <NavLink
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/"
            >
              <li className="text-xl py-4 flex">
                <HiHome size={25} className="mr-4" /> Home
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/instructors"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaChalkboardTeacher size={25} className="mr-4" /> Instructors
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/classes"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaChalkboard size={25} className="mr-4" /> Classes
              </li>
            </NavLink>
           {
            user && isAdmin && (
              <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/admin-dashboard/manage-users"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaListAlt size={25} className="mr-4" /> Dashboard
              </li>
            </NavLink>
            )
           } 
           {
            user && isInstructor && (
              <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/instructor-dashboard/my-classes"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaListAlt size={25} className="mr-4" /> Dashboard
              </li>
            </NavLink>
            )
           } 
           {
            user && isStudent && (
              <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              to="/student-dashboard/my-selected-classes"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaListAlt size={25} className="mr-4" /> Dashboard
              </li>
            </NavLink>
            )
           } 
            

            {!user ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "actiVatedTab" : "defaultTab"
                }
                to="/login"
                onClick={() => setNav(!nav)}
              >
                <li className="text-xl py-4 flex">
                  <FaUserPlus size={25} className="mr-4" /> Login
                </li>
              </NavLink>
            ) : (
              <li onClick={signOutHandler} className="text-xl font-semibold py-4 flex">
                <FaUserAltSlash size={25} className="mr-4" /> Logout
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
