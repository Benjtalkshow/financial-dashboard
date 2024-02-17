import React from "react";
import { NavLink } from "react-router-dom";
import {
  CardCoin,
  Category,
  Chart,
  LogoutCurve,
  MessageQuestion,
  Receipt1,
  Setting2,
  Wallet,
} from "iconsax-react";
import toast from "react-hot-toast";

const iconColor = "#4c49ee";
const iconSize = "24"
const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <Category size={iconSize} color={iconColor} />,
    },
    {
      name: "Invoice",
      href: "/invoice",
      icon: <Receipt1 size={iconSize} color={iconColor} />,
    },
    {
      name: "Wallets",
      href: "/wallet",
      icon: <Wallet size={iconSize} color={iconColor} />,
    },
    {
      name: "Reports",
      href: "/report",
      icon: <Chart size={iconSize} color={iconColor} />,
    },
    {
      name: "Transaction",
      href: "/transaction",
      icon: <CardCoin size={iconSize} color={iconColor} />,
    },
    {
      name: "Settings",
      href: "/setting",
      icon: <Setting2 size={iconSize} color={iconColor} />,
    },
    {
      name: "Help",
      href: "/help",
      icon: <MessageQuestion size={iconSize} color={iconColor} />,
    },
  ];
  return (
    <section className="fixed w-full">
      <div className="h-screen w-64 bg-white py-10 px-3 fixed rounded-tr-xl rounded-br-xl">
        <ul className="space-y-4">
          {navItems.slice(0, 5).map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 mb-1 inline-flex w-full items-center text-base font-normal text-gray-900 hover:font-bold hover:ml-1 transition-all duration-300 rounded hover:bg-[#e4e4ff] ${
                    isActive ? "bg-[#e4e4ff]" : ""
                  }`
                }
                role="menuitem"
                aria-current={
                  window.location.pathname === item.href ? "page" : undefined
                }
              >
                <span className="ml-3 whitespace-nowrap flex items-center gap-2 font-semibold">
                  {item.icon} {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="divider w-full h-[2px] bg-[#e4e4ff] my-10"></div>
        <ul className="space-y-4">
          {navItems.slice(5, 7).map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 mb-1 inline-flex w-full items-center text-base font-normal text-gray-900 hover:font-bold hover:ml-1 transition-all duration-300 rounded hover:bg-[#e4e4ff] ${
                    isActive ? "bg-[#e4e4ff]" : ""
                  }`
                }
                role="menuitem"
                aria-current={
                  window.location.pathname === item.href ? "page" : undefined
                }
              >
                <span className="ml-3 whitespace-nowrap flex items-center gap-2 font-semibold">
                  {item.icon} {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="logoutDiv mt-40">
        <button
                className="px-4 py-2 mb-1 inline-flex w-full items-center text-base font-normal text-gray-900 hover:font-bold hover:ml-1 transition-all duration-300 rounded hover:bg-[#e4e4ff]"
                onClick={() => {toast.success("Logged out successfully!!")}}
              >
                <span className="ml-3 whitespace-nowrap flex items-center gap-2 font-semibold">
                  <LogoutCurve size={iconSize} color={iconColor} />
                  <p>Logout</p>
                </span>
              </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
