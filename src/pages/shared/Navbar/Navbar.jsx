import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import {
  FaChalkboard,
  FaChalkboardTeacher,
  FaListAlt,
  FaUserAltSlash,
  FaUserCircle,
  FaUserFriends,
  FaUserNinja,
  FaUserPlus,
  FaWallet,
} from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import useAuthentication from "../../../hooks/useAuthentication";
import logo from "/ninja-Logo.ico";
import { Link, NavLink } from "react-router-dom";
import { Button, Tooltip, Avatar } from "@mui/material";
import { HiHome } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut, nav, setNav } = useAuthentication();
  const signOutHandler = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    //bg-[#f1f4f7]
    <div className=" bg-[#f5f5f5] max-w-[1300px] mx-auto drop-shadow-md py-2 flex justify-between items-center px-4">
      <div className="flex gap-2 items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer hidden max-sm:block"
        >
          <AiOutlineMenu size={30} />
        </div>
        <FaUserNinja className="text-2xl text-violet-600"></FaUserNinja>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2">
          Camp <span className="font-bold text-violet-600">Ninja</span>
        </h1>
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
          {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "actiVatedTab" : "defaultTab"
                }
                // to="addAToy"
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
            <Tooltip
              disableFocusListener
              disableTouchListener
              arrow
              title={user?.displayName}
            >
              <Button>
                <Avatar
                  alt={user?.displayName}
                  src={user?.photoURL}
                  sx={{ width: 45, height: 45 }}
                />
              </Button>
            </Tooltip>

            <button onClick={signOutHandler} className="navbar-btn">
              <div className="flex gap-4 items-center justify-center">
                Log Out <FaUserAltSlash />
              </div>
            </button>
          </div>
        ) : (
          <div className="flex">
            <Link to="/login">
              <button className="navbar-logOut-btn">
                <div className="flex gap-4 items-center justify-center">
                  Login <FaUserPlus />
                </div>
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-40 duration-500"
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "actiVatedTab" : "defaultTab"
              }
              // to="/classes"
              onClick={() => setNav(!nav)}
            >
              <li className="text-xl py-4 flex">
                <FaListAlt size={25} className="mr-4" /> Dashboard
              </li>
            </NavLink>

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
