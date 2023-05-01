import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-[#89023E] fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-extrabold text-[28px]">Manya</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#C7D9B7] px-3 py-2 rounded-md font-medium"
              >
                Home
              </a>

              <a
                href="#projects"
                className="text-white hover:text-[#C7D9B7] px-3 py-2 rounded-md font-medium"
              >
                Portfolio
              </a>

              <a
                href="#contact"
                className="text-white hover:text-[#C7D9B7] px-3 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-89023E inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-expanded="false"
              onClick={() => setMenu(!menu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:text-[#C7D9B7] block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="#projects"
              className="text-white hover:text-[#C7D9B7] block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="text-white hover:text-[#C7D9B7] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
