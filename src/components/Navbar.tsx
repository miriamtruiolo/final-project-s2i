import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../data/data";
import Logo from "../img/logo-planet.png"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#42977d] shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-lg font-semibold text-gray-900">
            <img className="h-14" src={Logo} alt="Logo pianeta" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navigation.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.to}
                    className="text-white font-semibold hover:text-gray-400 block"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 text-center">
          {navigation.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                className="text-white font-semibold hover:text-gray-400 block"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
