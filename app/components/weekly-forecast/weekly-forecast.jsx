"use client";

import Image from "next/image";
import { useState } from "react";
import "./weekly-forecast.css";

const WeeklyForecast = ({ data }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

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
    setCurrentWeekIndex((prevIndex) =>
      Math.min(prevIndex + 1, weeks.length - 1),
    );
  };

  const currentWeekData = data.weeklyWeather[weeks[currentWeekIndex]];

  return (
    <div className="weekly-forecast__main-container">
      <div className="weekly-forecast__main-layout">
        <button
          disabled={currentWeekIndex === 0 || isAnimating}
          onClick={() => {
            handlePreviousWeek(), startAnimation();
          }}
          className="weekly-forecast__button"
        >
          <div className="weekly-forecast__button-icon-container">
            <Image
              src="/assets/left-icon.svg"
              fill
              alt="Navigation Icon"
              className="weekly-forecast__button-icon"
            />
          </div>
        </button>
        <div className="weekly-forecast__forecast-container">
          {Object.entries(currentWeekData).map(([day, { type, degree }]) => (
            <div
              key={day}
              className={`weekly-forecast__forecast-item-container ${isAnimating && "weekly-forecast__forecast-item-animate-scale"
                }`}
            >
              <span className="weekly-forecast__forecast-item-day-label">
                {day}
              </span>
              <div className="weekly-forecast__forecast-item-weather-icon-container">
                <Image
                  src={weatherIcons[type.toLowerCase() || defaultIcon]}
                  fill
                  alt={type}
                  className="weekly-forecast__forecast-item-weather-icon"
                />
              </div>
              <span className="weekly-forecast__forecast-item-temperature-label">
                {degree}°
              </span>
            </div>
          ))}
        </div>
        <button
          disabled={currentWeekIndex === weeks.length - 1 || isAnimating}
          onClick={() => {
            handleNextWeek(), startAnimation();
          }}
          className="weekly-forecast__button"
        >
          <div className="weekly-forecast__button-icon-container">
            <Image
              src="/assets/right-icon.svg"
              fill
              alt="Navigation Icon"
              className="weekly-forecast__button-icon"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WeeklyForecast;
