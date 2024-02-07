import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header({ scrolling }) {
   const [navbar, setNavbar] = useState(false);
   return (
      <header
         className={`w-full h-20 flex justify-between items-center px-6 lg:px-20 fixed top-0 z-10 transition-all duration-300 ease-in ${
            scrolling ? "bg-white shadow-lg" : "bg-transparent"
         }`}
      >
         <Link to={"/"}>
            {!scrolling ? (
               <img className="w-44 h-12" src="/logo white.png" alt="logo" />
            ) : (
               <img className="w-44 h-14" src="/logo.png" alt="logo" />
            )}
         </Link>
         <button
            className={`md:hidden text-xl ${
               !scrolling ? "text-white" : "text-black"
            }`}
            onClick={() => setNavbar((prev) => !prev)}
         >
            <FontAwesomeIcon icon={navbar ? faXmark : faBars} />
         </button>
         <nav
            className={`flex justify-center absolute md:static w-full h-screen md:h-20 md:w-auto top-20 transition-all duration-500 ease-in md:left-0 ${
               navbar ? "bg-white left-0" : "bg-transparent -left-[800px]"
            } ${
               scrolling ? "text-black" : navbar ? "text-black" : "text-white"
            }`}
         >
            <ul
               className={`flex flex-col items-center md:justify-center md:flex-row gap-6 text-xl font-medium pt-8 md:pt-0`}
            >
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        `${isActive ? "text-sky-600" : ""}`
                     }
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/product"
                     className={({ isActive }) =>
                        `${isActive ? "text-sky-600" : ""}`
                     }
                  >
                     Product
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/service"
                     className={({ isActive }) =>
                        `${isActive ? "text-sky-600" : ""}`
                     }
                  >
                     Service
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        `${isActive ? "text-sky-600" : ""}`
                     }
                  >
                     Contact
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/social"
                     className={({ isActive }) =>
                        `${isActive ? "text-sky-600" : ""}`
                     }
                  >
                     social
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
