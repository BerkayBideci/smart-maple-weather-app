"use client"

import Image from "next/image";
import { useState } from "react";

const WeeklyForecast = ({ data }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000)
  };

  const weatherIcons = {
    "sunny cloudy": "/assets/sunny-cloudy-icon.svg",
    "sunny": "/assets/sunny-icon.svg",
    "rainy": "/assets/rainy-icon.svg",
    "sunny rainy": "/assets/sunny-rainy-icon.svg",
    "thunder": "/assets/thunder-forecast-icon.svg",
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
    <div className="bg-secondary/40 py-10 px-3 rounded-[1.75rem]">
      <div className="flex items-center justify-between 2xl:gap-x-6">
        <button disabled={currentWeekIndex === 0 || isAnimating} onClick={() => { handlePreviousWeek(), startAnimation() }} className="hover:rounded-full hover:bg-secondary/60 flex justify-center p-3 disabled:opacity-50 disabled:hover:bg-secondary/30">
          <div className="relative h-4 w-4">
            <Image src="/assets/left-icon.svg" fill alt="Navigation Icon" className="object-contain" />
          </div>
        </button>
        <div className="flex items-center justify-between gap-x-12 overflow-x-auto scrollable">
          {Object.entries(currentWeekData).map(
            ([day, { type, degree }]) => (
              <div key={day} className={`flex flex-col justify-center items-center gap-y-8 w-[4.75rem] ${isAnimating && "animate-scale"}`}>
                <span className="uppercase text-xs">{day}</span>
                <div className="relative overflow-hidden h-10 w-10 min-[970px]:h-[3.75rem] min-[970px]:w-[3.75rem]">
                  <Image
                    src={weatherIcons[type.toLowerCase() || defaultIcon]}
                    fill
                    alt={type}
                    className="object-contain"
                  />
                </div>
                <span className="min-[970px]:text-2xl">{degree}°</span>
              </div>
            )
          )}
        </div>
        <button disabled={currentWeekIndex === weeks.length - 1 || isAnimating} onClick={() => { handleNextWeek(), startAnimation() }} className="hover:rounded-full hover:bg-secondary/60 flex justify-center p-3 disabled:opacity-50 disabled:hover:bg-secondary/30">
          <div className="relative h-4 w-4">
            <Image src="/assets/right-icon.svg" fill alt="Navigation Icon" className="object-contain" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WeeklyForecast;
