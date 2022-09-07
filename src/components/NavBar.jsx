/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute text-white z-10">
      <div>
        <h1>Beaches</h1>
      </div>
      <ul className="md:flex hidden">
        <li>Home</li>
        <li>About</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="md:flex hidden">
        <BsPerson className="mr-6" size={20} />
        <BiSearch size={20} />
      </div>

      {/* Hamburguer */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobile dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'text-black absolute left-0 top-0 bg-gray-100 w-full px-4 py-7 flex flex-col md:hidden'
            : ' text-black absolute left-[-100%] top-0 bg-gray-100 w-full px-4 py-7 flex flex-col md:hidden '
        }
      >
        <ul className="md:flex ">
          <h1>BEACHES</h1>
          <li className="border-b">Home</li>
          <li className="border-b">About</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
