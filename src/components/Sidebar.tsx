import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/icons/arrow-down.svg";
import dashboard from "../assets/icons/dashboard.svg";
import inventory from "../assets/icons/inventory.svg";
import procurement from "../assets/icons/procurement.svg";
import finance from "../assets/icons/finance.svg";
import communication from "../assets/icons/communication.svg";
import calendar from "../assets/icons/calendar.svg";
import contacts from "../assets/icons/contacts.svg";
import support from "../assets/icons/support.svg";
import settings from "../assets/icons/settings.svg";
import avatar from "../assets/images/avatar.svg";
import signOut from "../assets/icons/sign-out.svg";
import { useState } from "react";

const Sidebar = () => {
  const navigationLinks = [
    {
      name: "Dashboard",
      nav: "",
      icon: dashboard,
    },
    {
      name: "Inventory",
      nav: "",
      icon: inventory,
    },
    {
      name: "Procurement",
      icon: procurement,
      subNav: [
        {
          name: "Quotes",
          nav: "/",
        },
        {
          name: "Orders",
          nav: "",
        },
      ],
    },
    {
      name: "Finance",
      icon: finance,
      subNav: [
        {
          name: "Budgets",
          nav: "",
        },
        {
          name: "Orders",
          nav: "",
        },
      ],
    },
    {
      name: "Communications",
      nav: "",
      icon: communication,
      notification: 10,
    },
    {
      name: "Calendar",
      nav: "",
      icon: calendar,
      notification: 10,
    },
    {
      name: "Contacts",
      nav: "",
      icon: contacts,
    },
  ];

  const otherLinks = [
    {
      name: "Support",
      nav: "",
      icon: support,
    },
    {
      name: "Settings",
      nav: "",
      icon: settings,
    },
  ];

  const { pathname } = useLocation();
  const [activeNav, setActiveNav] = useState(pathname);
  const [openSubNav, setOpenSubNav] = useState<string | null>("Procurement");
  const navigate = useNavigate();

  const handleNavClick = (nav: string) => {
    if (nav !== "#") {
      setActiveNav(nav);
      navigate(nav);
    }
  };

  const toggleSubNav = (nav: string) => {
    setOpenSubNav((prev) => (prev === nav ? null : nav));
  };

  return (
    <div className="w-72 fixed space-y-4 pl-3 pr-5 py-7 h-screen bg-sidebar-">
      <div className="mb-8 px-3">
        <img className="cursor-pointer" src={logo} alt="" />
      </div>
      <div className="flex h-[calc(100%-40px)] flex-col justify-between">
        <ul className="text-sidebar-text space-y-2 flex flex-col justify-between">
          {navigationLinks.map((item) => {
            return (
              <li key={item.name}>
                {/* Parent Link */}
                <div
                  onClick={() => {
                    if (item.subNav) toggleSubNav(item.name);
                    else handleNavClick(item.nav || "#");
                  }}
                  className={`flex justify-start gap-3 items-center px-4 py-2 rounded cursor-pointer ${
                    activeNav === item.nav
                      ? "bg-sidebar-active"
                      : "hover:bg-sidebar-active"
                  }`}
                >
                  <img src={item.icon} alt="" />
                  <div className="flex justify-between items-center w-full">
                    <span>{item.name}</span>
                    {item.subNav && (
                      <span
                        className={`transition-transform justify-self-end ${
                          openSubNav === item.name ? "rotate-180" : ""
                        }`}
                      >
                        <img src={arrow} alt="" />
                      </span>
                    )}
                    {item.notification && (
                      <span className="bg-brand-blue text-white text-xs font-semibold px-2 pb-0.5 rounded-full">
                        {item.notification}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sub-navigation */}
                {item.subNav && (
                  <ul
                    className={`space-y-2 overflow-hidden transition-all duration-300 ${
                      openSubNav === item.name ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    {item.subNav.map((subItem) => (
                      <li key={subItem.name}>
                        <div
                          onClick={() => handleNavClick(subItem.nav || "#")}
                          className={`pl-12 block px-4 py-2 cursor-pointer rounded ${
                            activeNav === subItem.nav
                              ? "bg-sidebar-active"
                              : "hover:bg-sidebar-active"
                          }`}
                        >
                          {subItem.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="space-y-10">
          <ul className="text-sidebar-text space-y-2 flex flex-col justify-between">
            {otherLinks.map((item) => (
              <li key={item.name}>
                {/* Parent Link */}
                <div
                  onClick={() => handleNavClick(item.nav || "#")}
                  className={`flex justify-start gap-3 items-center px-4 py-2 rounded cursor-pointer ${
                    activeNav === item.nav
                      ? "bg-sidebar-active"
                      : "hover:bg-sidebar-active"
                  }`}
                >
                  <img src={item.icon} alt="" />
                  <div className="flex justify-between items-center w-full">
                    <span>{item.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex ml-3 justify-between">
            <img src={avatar} alt="" />
            <div className="flex flex-col leading-tight">
              <span className="text-sidebar-brand font-bold">Mark Benson</span>
              <span className="text-sidebar-gray">markbenson@core...</span>
            </div>
            <img className="cursor-pointer" src={signOut} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
