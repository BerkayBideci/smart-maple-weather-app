"use client"

import Image from "next/image";
import { useState } from "react";

const WeeklyForecast = ({ data }) => {

  const weatherIcons = {
    "sunny cloudy": "/assets/sunny-cloudy-icon.svg",
    sunny: "/assets/sunny-icon.svg",
    rainy: "/assets/rainy-icon.svg",
    "sunny rainy": "/assets/sunny-rainy-icon.svg",
    thunder: "/assets/thunder-forecast-icon.svg",
  };

  const defaultIcon = "/assets/thunder-icon.svg";

  const weeks = ["previous", "current", "next"];
  const [currentWeekIndex, setCurrentWeekIndex] = useState(1);

  const handlePreviousWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.min(prevIndex + 1, weeks.length - 1));
  };

  const currentWeekData = data.weeklyWeather[weeks[currentWeekIndex]];

  return (
    <div className="bg-secondary/40 py-11 px-3 rounded-[1.75rem]">
      <div className="flex items-center justify-between gap-x-14">
        <button onClick={handlePreviousWeek} className="hover:rounded-full hover:bg-secondary/60 flex justify-center p-3">
          <div className="relative h-4 w-4">
            <Image src="/assets/left-icon.svg" fill alt="Navigation Icon" className="object-contain" />
          </div>
        </button>
        {Object.entries(currentWeekData).map(
          ([day, { type, degree }]) => (
            <div key={day} className="flex flex-col justify-center items-center gap-y-16">
              <span className="uppercase text-xs">{day}</span>
              <div className="relative overflow-hidden h-[3.75rem] w-[3.75rem]">
                <Image
                  src={weatherIcons[type.toLowerCase() || defaultIcon]}
                  fill
                  alt={type}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl">{degree}°</span>
            </div>
          )
        )}
        <button onClick={handleNextWeek} className="hover:rounded-full hover:bg-secondary/60 flex justify-center p-3">
          <div className="relative h-4 w-4">
            <Image src="/assets/right-icon.svg" fill alt="Navigation Icon" className="object-contain" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WeeklyForecast;
