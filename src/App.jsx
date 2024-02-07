import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

export default function App() {
  const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   return (
      <>
         <Header scrolling={scrolling} />
         <div className="w-full min-h-screen">
         <Outlet />
         </div>
         <Footer />
      </>
   );
}
