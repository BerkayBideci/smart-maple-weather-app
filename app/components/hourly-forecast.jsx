import Image from "next/image";

const HourlyForecast = ({ data }) => {

  const getTemperatureIcon = (temperature) => {
    switch (true) {
      case temperature < 10:
        return "/assets/thunder-snow-night-icon.svg";
      case temperature >= 10 && temperature < 20:
        return "/assets/cloudy-night-icon.svg";
      case temperature >= 20 && temperature < 30:
        return "/assets/night-icon.svg";
      default:
        return "/assets/night-icon.svg";
    }
  };

  return (
    <div className="bg-secondary/40 rounded-[1.75rem] p-6 flex flex-col gap-4 2xl:grow w-full sm:w-1/2 2xl:w-auto">
      <div className="flex items-center justify-center 2xl:justify-start gap-x-2">
        <div className="relative h-7 w-7">
          <Image src="/assets/hourly-clock.svg" fill className="object-contain" alt="Clock Icon" />
        </div>
        <span className="text-xl">Hourly Forecast</span>
      </div>
      <div className="flex items-center justify-between grow">
        {Object.entries(data.forecast).map(([time, temperature]) => (
          <div key={time} className="flex flex-col items-center justify-between gap-2">
            <span className="text-[10px]">{`${temperature}°`}</span>
            <Image src={getTemperatureIcon(temperature)} width={16} height={16} alt={`Icon for ${temperature}°`} />
            <span className="text-[8px]">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
