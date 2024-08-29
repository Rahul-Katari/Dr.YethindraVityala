"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import navHelp from "../../assets/images/home/nav-help.png";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/icons/home-icon.png";
import AppointmentModalOpener from "../AppointmentModalOpener";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import NavSlider from "./NavSlider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getMenu } from "@/services/api";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MegaMenu from "./MegaMenu";

export const HomeIcon = (
  <div>
    <img src={home} />
  </div>
);
const navigation = [
  { name: "Home", href: "/", current: true, desktopNav: true },
  {
    name: "About Us",
    href: "#",
    current: false,
    desktopNav: true,
  },
  // {
  //   name: "ENT",
  //   href: "/ent",
  //   current: false,
  //   desktopNav: true,
  //   megaMenu: true,
  // },
  // {
  //   name: "Gastroenterology",
  //   href: "/gastroenterology",
  //   current: false,
  //   desktopNav: true,
  //   megaMenu: true,
  // },
  // {
  //   name: "Health Talk",
  //   href: "/healthTalk",
  //   current: false,
  //   desktopNav: true,
  // },
  { name: "Blogs", href: "#", current: false, desktopNav: true },
  {
    name: "Privacy Policy",
    href: "#",
    current: false,
    desktopNav: false,
  },
  // { name: "Careers", href: "/careers", current: false, desktopNav: false },
  // {
  //   name: "Patients & Visitors",
  //   href: "/patientsVisitors",
  //   current: false,
  //   desktopNav: true,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const entCategories = [
  "Ear Treatments",
  "Nose Treatments",
  "Throat  Treatments",
  "General ENT Services",
  "Hearing and Speech Services",
];
const gastrologyCategories = [
  "Conditions",
  "Procedures",
];

const Navbar = () => {
  const router = usePathname();
  const pathname = router;
  const disclosureRef = useRef(null);
  const [openMegaMenu, setOpenMegaMenu] = useState({});
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [entServices, setEntServices] = useState();
  const [gastrologyServices, setGastrologyServices] = useState();
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    const fetchServices = async (serviceType) => {
      try {
        const res = await getMenu(serviceType);
        if (res && res.data) {
          if (serviceType === "ENT") setEntServices(res.data);
          else if (serviceType === "gastrology")
            setGastrologyServices(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices("ENT");
    fetchServices("gastrology");
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
      easing: 'ease',
      once: true,
      anchorPlacement: 'center-bottom',
      delay: 200
    });

  }, [])
  const handleLinkClick = () => {
    setMobileNav(false);
  };

  const toggleMegaMenu = (menuName) => {
    setOpenMegaMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleMouseEnter = (menuName) => {
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = (menuName) => {
    setHoveredMenu(null);
  };
  return (
    <Disclosure
      as="nav"
      className="max-w-7xl mx-auto shadow-nav rounded-md bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto lg:p-3 lg:px-1 relative">
            <div className="text-white lg:hidden">
              <div className="py-2 bg-theme-gradient text-center text-sm">
                Contact Number: <a href="tel:+918885544844">8 1 0 6 5 2 5 6 2 1 </a>
              </div>
              <div className="">{/* <NavSlider /> */}</div>
            </div>
            <div className="flex lg:h-16 items-center justify-between p-2">
              <Link className="" href={"/"}>
                <Image
                  width={200}
                  height={100}
                  className=""
                  src={logo.src}
                  alt="Your Company"
                />
              </Link>
              <div className="inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <button
                  type="button"
                  onClick={() => setMobileNav(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <IconMenu2 aria-hidden="true" className="h-6 w-6" />
                </button>
                <div>
                  <AppointmentModalOpener button={"Appointment"} />
                </div>
              </div>

              <div className="flex flex-1 justify-end items-center max-lg:hidden">
                <div className="flex items-center">
                  <div className="hidden sm:block">
                    <div className="flex items-center">
                      {navigation.map((item) => {
                        return (
                          item.desktopNav &&
                          (item.megaMenu ? (
                            <div
                              key={item.name}
                              className="group"
                              onMouseEnter={() => handleMouseEnter(item.name)}
                              onMouseLeave={() => handleMouseLeave(item.name)}
                            >
                              <a
                                href={item.href}
                                className={classNames(
                                  (item.href === "/" && pathname === "/") ||
                                    (item.href !== "/" &&
                                      item.href === pathname) ||
                                    (pathname?.includes(item.href) &&
                                      item.href !== "/")
                                    ? "text-navHighlight underline"
                                    : "hover:text-navHighlight hover:underline",
                                  "rounded-md px-3 py-2 font-medium text-xs xl:text-base data-[active]:text-navHighlight data-[active]:underline flex items-center outline-0"
                                )}
                              >
                                {item.name}
                                <IconChevronDown className="size-5 group-data-[open]:rotate-180" />
                              </a>
                              {hoveredMenu === item.name && (
                                <div
                                  className={`absolute z-10 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 pt-8 ${item.name === "ENT" ? "w-full left-0" :"w-9/12 right-0"
                                    }`}
                                  onMouseEnter={() =>
                                    handleMouseEnter(item.name)
                                  }
                                // onMouseLeave={() => handleMouseLeave(item.name)}
                                >
                                  <div className="bg-white border border-gray-200 rounded-md shadow-lg">
                                    <div
                                      className={`grid gap-4 p-4 ${item.name === "ENT" ? "grid-cols-5" : "grid-cols-2"
                                        }`}
                                    >
                                      <MegaMenu item={item} categories={item.name === "ENT" ? entCategories : gastrologyCategories} services={item.name === "ENT" ? entServices : gastrologyServices} />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                (item.href === "/" && pathname === "/") ||
                                  (item.href !== "/" &&
                                    item.href === pathname) ||
                                  (pathname?.includes(item.href) &&
                                    item.href !== "/")
                                  ? "text-navHighlight underline"
                                  : "hover:text-navHighlight hover:underline",
                                "rounded-md px-3 py-2  font-medium text-xs xl:text-base"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-3 p-1 border-[#25B4F8] border rounded-md border-2"
                  // style={{
                  //   border: "1px solid",
                  //   borderImageSource:
                  //     "linear-gradient(135deg, #1376F8 0%, #25B4F8 100%)",
                  //   borderImageSlice: 1,
                  // }}
                >
                  <div className="">
                    <img src={navHelp.src} alt="help" />
                  </div>
                  <div>
                    <a
                      href="tel:9999999999"
                      className="font-semibold text-navHighlight"
                    >
                      9 9 9 9 9 9 9 9 9 9
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Off-canvas mobile menu */}
          <Dialog open={mobileNav} onClose={setMobileNav} className="relative z-40 lg:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
              >
                <div className="flex px-4 py-5 justify-between bg-white">
                  <Link className="" href={"/"}>
                    <Image
                      width={200}
                      height={100}
                      className=""
                      src={logo.src}
                      alt="Your Company"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileNav(false)}
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <IconX aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="bg-theme rounded-lg mx-3">
                  <div className="space-y-1 pb-3 pt-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <div
                          className={classNames(
                            "flex items-center justify-between text-sm font-medium border-b mx-2",
                            (item.href === "/" && pathname === "/") ||
                              (item.href !== "/" && item.href === pathname) ||
                              (pathname?.includes(item.href) && item.href !== "/")
                              ? "text-navHighlight"
                              : "text-gray-200"
                          )}
                        >
                          <a
                            href={item.href}
                            onClick={handleLinkClick}
                            aria-current={item.current ? "page" : undefined}
                            className="py-3 px-2 w-full"
                          >
                            {item.name}
                          </a>
                          {item.megaMenu && (
                            <button
                              onClick={() => toggleMegaMenu(item.name)}
                              className="text-gray-400 hover:text-navHighlight focus:outline-none"
                            >
                              <IconChevronDown
                                className={`h-5 w-5 transform transition-transform duration-200 ${openMegaMenu[item.name] ? "rotate-180" : ""
                                  }`}
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>
                        {item.megaMenu && openMegaMenu[item.name] && (
                          <div className="ps-4">
                            <MegaMenu item={item} categories={item.name === "ENT" ? entCategories : gastrologyCategories} services={item.name === "ENT" ? entServices : gastrologyServices} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="items-center p-3"><h5 className="font-semibold mb-2 text-center text-highlight">Contact Number:</h5><div className="bg-theme font-medium m-auto px-2 rounded-md text-center text-lg text-white w-fit"><a href="tel:+918885544844">+91 88855 44844</a></div></div>
              </DialogPanel>
            </div>
          </Dialog>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
