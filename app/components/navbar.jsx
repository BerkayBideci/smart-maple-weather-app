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
    <div className="bg-secondary/40 2xl:min-w-[11.5rem] p-6 md:p-11 rounded-[1.75rem] flex 2xl:flex-col min-[506px]:justify-center min-[506px]:items-center overflow-x-auto scrollable">
      <div className="flex 2xl:flex-col justify-center items-center gap-8">
        <div className="relative h-16 w-16 md:h-24 md:w-24">
          <Image
            src="/logo/smart-maple-navbar-logo.png"
            fill
            alt="Smart Maple Logo"
          />
        </div>
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setSelected(item.name)}
          >
            <div className={selected === item.name ? "relative h-12 w-12 md:h-20 md:w-20" : "relative h-8 w-8"}>
              <Image
                src={item.icon}
                alt={item.name}
                fill
              />
            </div>
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
