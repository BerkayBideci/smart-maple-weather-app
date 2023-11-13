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
    <div className="w-3/5">
      <div className="w-full flex justify-between">
        <div className="flex shrink-0 flex-col justify-between">
          <div className="flex gap-x-5">
            <Image src="/assets/location-icon.svg" width={20} height={28} alt="Location Pin" />
            <h1 className="text-2xl">{data?.city}</h1>
          </div>
          <span className="text-3xl">{data?.type}</span>
          <span className="text-6xl">{data?.degree}°C</span>
        </div>
        <div className="w-full flex items-center">
          <Image src={iconPath} width={232} height={215} alt="Weather Icon" className="mx-auto" />
          <span className="text-4xl">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;