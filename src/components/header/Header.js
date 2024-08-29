"use client";
// import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "./header.css";

import { usePathname } from "next/navigation";
import NavbarNew, { MegaMenuWithHover } from "./NavbarNew";
import DoctorPopupWrapper from "../DoctorPopup";

export function ScriptInjector() {
  useEffect(() => {
    const scriptContent = `
      (function(w, d) { 
        w.CollectId = "66ae29fec7ec3e97bdf83a38"; 
        var h = d.head || d.getElementsByTagName("head")[0]; 
        var s = d.createElement("script"); 
        s.setAttribute("type", "text/javascript"); 
        s.async = true; 
        s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
        h.appendChild(s); 
      })(window, document);
    `;

    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "text/javascript");
    scriptElement.async = true;
    scriptElement.innerHTML = scriptContent;
    document.head.appendChild(scriptElement);

    // Clean up script on component unmount
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return null;
}

const Header = () => {
  const router = usePathname();
  const pathname = router;
  const prevPathName = useRef(null);

  useEffect(() => {
    if (pathname !== prevPathName.current) {
      const handleScroll = () => {
        // if (!hash) {
        //   window.scrollTo({
        //     top: 0,
        //     behavior: "smooth",
        //   });
        // }
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        prevPathName.current = pathname;
      };
      setTimeout(handleScroll, 100); // Add a small delay before scrolling
    }
  }, [pathname]);

  return (
    <header className="container max-w-screen-3xl max-md:sticky top-0 z-[2] shadow-lg">
      <div className="md:grid grid-cols-12 md:fixed top-0 z-[2] lg:h-[48px]  w-full left-0">
        <div className="col-span-12 relative">
          {/* <TopBanner /> */}
          <Navbar />
          
          {/* <NavbarNew/> */}
          <SidebarButtons />
        {/* <DoctorPopupWrapper/> */}

        </div>
      </div>
    </header>
  );
};

export default Header;
