import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ImgLogo from '../assets/logo.png';

const Navbar = () => {
  //hook para el menu despleglable
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between h-12 sm:h-16 lg:h-24 bg-zinc-900 lg:bg-transparent">
      <img src={ImgLogo}
        loading='lazy'
        alt="Logo"
        className="max-h-24 bg-zinc-900 py-3 px-6 sm:px-12 rounded-br-3xl" />
      <nav className=" absolute lg:relative w-full flex items-center lg:me-auto lg:ms-5 left-0 right-0 mx-auto z-20">
        {/* Menú en pantalla grande */}
        <ul className="hidden lg:flex space-x-3 lg:space-x-6 border border-zinc-100 rounded-full px-4 lg:px-8 py-2 lg:py-3">
          <li>
            <Link to="/home" className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Menú hamburguesa en pantalla pequeña */}
        <div className="lg:hidden flex justify-center mx-auto mt-2 sm:mt-5">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <div className=" absolute w-full top-10 sm:top-14 left-0 bg-zinc-900 border-t border-zinc-900 lg:hidden z-10">
            <ul className=" block items-center p-5 py-4">
              <li className=' my-2'>
                <Link
                  to="/home"
                  onClick={toggleMenu}
                  className="text-white hover:bg-white hover:text-black rounded-full px-4 py-2"
                >
                  Home
                </Link>
              </li>
              <li className=' my-2'>
                <Link
                  to="/aboutUs"
                  onClick={toggleMenu}
                  className="text-white hover:bg-white hover:text-black rounded-full px-4 py-2"
                >
                  About Us
                </Link>
              </li>
              <li className=' my-2'>
                <Link
                  to="/contactUs"
                  onClick={toggleMenu}
                  className="text-white hover:bg-white hover:text-black rounded-full px-4 py-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="flex items-center bg-zinc-900 py-2 sm:px-10 h-10 sm:h-16 lg:h-24 rounded-bl-3xl">
        <Link to="/"
          className="text-white w-20 md:w-32 ms-0 sm:ms-5 xl:ms-24 text-xs md:text-base bg-zinc-900 bg-opacity-50 min-h-8 max-h-24 text-center py-2 border border-zinc-100 hover:bg-white hover:text-black rounded-full"
        >Log Out</Link>
      </div>
    </div>
  );
};

export default Navbar;
