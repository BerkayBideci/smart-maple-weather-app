import Image from "next/image";

const Header = ({ data }) => {

  const weatherIcons = {
    "sunny cloudy": "/assets/sunny-cloudy-icon.svg",
    "sunny": "/assets/sunny-icon.svg",
    "rainy": "/assets/rainy-icon.svg",
    "sunny rainy": "/assets/sunny-rainy-icon.svg",
    "thunder": "/assets/thunder-icon.svg"
  }

  const defaultIcon = "/assets/thunder-icon.svg"
  const iconPath = weatherIcons[data?.type.toLowerCase()] || defaultIcon;

  const dateString = data?.date;
  const formattedDate = formatDynamicDate(dateString);

  function formatDynamicDate(dateString) {
    const dateObj = new Date(dateString);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[dateObj.getUTCDay()];
    const date = dateObj.getUTCDate();
    const month = months[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear();

    const formattedDateString = `${day} | ${date} ${month} ${year}`;

    return formattedDateString;
  }

  return (
    <div className="2xl:w-[65.3%]">
      <div className="w-full flex md:flex-row flex-col justify-between">
        <div className="flex shrink-0 flex-col justify-between gap-y-2 md:gap-y-10 items-center md:items-start">
          <div className="flex gap-x-2 md:gap-x-5">
            <Image src="/assets/location-icon.svg" width={20} height={28} alt="Location Pin" />
            <h1 className="lg:text-2xl text-xl">{data?.city}</h1>
          </div>
          <span className="lg:text-3xl text-2xl">{data?.type}</span>
          <span className="lg:text-6xl text-4xl">{data?.degree}°C</span>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="relative h-20 w-20 md:h-44 md:w-44 md:mx-auto">
            <Image src={iconPath} fill alt="Weather Icon" />
          </div>
          <span className="lg:text-4xl md:text-2xl text-base 2xl:pe-20">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;