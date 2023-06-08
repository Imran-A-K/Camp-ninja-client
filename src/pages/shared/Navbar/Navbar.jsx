import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserCircle, FaUserFriends, FaUserNinja, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import useAuthentication from '../../../hooks/useAuthentication';
import logo from '/ninja-Logo.ico'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
const [nav, setNav] = useState(false)
// const { user, logOut } = useAuthentication()
const user = true
// console.log(user)
const signOutHandler = () => {
  // logOut()
  //   .then()
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
};
  return (
    <div className='max-w-[1300px] bg-[#f1f4f7] mx-auto drop-shadow-md py-2 flex justify-between items-center px-4'>
      {/* Left side */}
      <div className='flex gap-2 items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer hidden max-sm:block'>
          <AiOutlineMenu size={30} />
        </div>
        <FaUserNinja className="text-2xl text-violet-600"></FaUserNinja>
        <h1 className='text-2xl sm:text-3xl lg:text-3xl px-2'>
          Camp <span className='font-bold text-violet-600'>Ninja</span>
        </h1>
      </div>


      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
      <div>
      <ul className="hidden md:flex gap-7">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeTab" : "default")}
              // to="/"
            >
              Home
            </NavLink>
          </li>
         {
          user &&  <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeTab" : "default")}
            // to="myToys"
          >
            Instructors
          </NavLink>
        </li>
         }
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeTab" : "default")}
              // to="allToys"
            >
              Classes
            </NavLink>
          </li>
         {
          user &&  <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeTab" : "default")}
            // to="addAToy"
          >
            Dashboard
          </NavLink>
        </li>
         }
         
        </ul>
      </div>

      
      <div className="md:flex pr-4">
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <div
                className="tooltip tooltip-bottom duration-1000"
                data-tip={user?.displayName}
              >
                <div className="avatar pt-2">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>

              <button
                onClick={signOutHandler}
                className="navbar-btn"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button className="navbar-logOut-btn">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};


export default Navbar;