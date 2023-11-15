import Image from "next/image";
import "./header.css";

const Header = ({ data }) => {
  const weatherIcons = {
    "sunny cloudy": "/assets/sunny-cloudy-icon.svg",
    "sunny": "/assets/sunny-icon.svg",
    "rainy": "/assets/rainy-icon.svg",
    "sunny rainy": "/assets/sunny-rainy-icon.svg",
    "thunder": "/assets/thunder-icon.svg",
  };

  const defaultIcon = "/assets/thunder-icon.svg";
  const iconPath = weatherIcons[data?.type.toLowerCase()] || defaultIcon;

  const dateString = data?.date;
  const formattedDate = formatDate(dateString);

  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[dateObj.getUTCDay()];
    const date = dateObj.getUTCDate();
    const month = months[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear();

    const formattedDateString = `${day} | ${date} ${month} ${year}`;

    return formattedDateString;
  }

  return (
    <div className="header__main-container">
      <div className="header__main-layout">
        <div className="header__location-container">
          <div className="header__location-heading-container">
            <Image
              src="/assets/location-icon.svg"
              width={20}
              height={28}
              alt="Location Pin"
            />
            <h1 className="header__location-heading">{data?.city}</h1>
          </div>
          <span className="header__location-weather-condition-label">
            {data?.type}
          </span>
          <span className="header__location-temperature-label">
            {data?.degree}°C
          </span>
        </div>
        <div className="header__date-container">
          <div className="header__date-weather-icon-container">
            <Image src={iconPath} fill alt="Weather Icon" />
          </div>
          <span className="header__date-label">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
