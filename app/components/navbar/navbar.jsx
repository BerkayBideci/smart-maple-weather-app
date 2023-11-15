"use client";

import Image from "next/image";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState("weather");

  const navbarItems = [
    {
      name: "weather",
      icon: "/assets/sunny-rainy-icon.svg",
    },
    {
      name: "explore",
      icon: "/assets/explore-icon.svg",
    },
    {
      name: "cities",
      icon: "/assets/location-navbar-icon.svg",
    },
    {
      name: "settings",
      icon: "/assets/settings-icon.svg",
    },
  ];

  return (
    <div className="navbar__main-container">
      <div className="navbar__main-container-layout">
        <div className="navbar__logo-container">
          <Image
            src="/logo/smart-maple-navbar-logo.png"
            fill
            alt="Smart Maple Logo"
          />
        </div>
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className="navbar__item-container"
            onClick={() => setSelected(item.name)}
          >
            <div
              className={
                selected === item.name
                  ? "navbar__item-active"
                  : "navbar__item-inactive"
              }
            >
              <Image src={item.icon} alt={item.name} fill />
            </div>
            <span
              className={
                selected === item.name
                  ? "navbar__item-label-active"
                  : "navbar__item-label-inactive"
              }
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
