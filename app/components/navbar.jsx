"use client";

import Image from "next/image";
import { useState } from "react";

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
    <div className="bg-secondary/40 max-w-[11.5rem] p-11 rounded-[1.75rem] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-7">
        <Image
          src="/logo/smart-maple-navbar-logo.png"
          width={100}
          height={100}
          alt="Smart Maple Logo"
        />
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            onClick={() => setSelected(item.name)}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={selected === item.name ? 75 : 34}
              height={selected === item.name ? 75 : 34}
            />
            <span
              className={
                selected === item.name ? "text-primary" : "text-secondary"
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
