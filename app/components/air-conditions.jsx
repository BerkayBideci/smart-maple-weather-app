import Image from "next/image";

const AirConditions = ({ data }) => {
  const airConditionsArray = data?.airConditions.split("::");

  const realFeel = airConditionsArray[0] + "°";
  const windSpeed = airConditionsArray[2] + " km/hr";
  const rainProbability = airConditionsArray[1] + "%";
  const uvIndex = airConditionsArray[3];

  const airConditions = [
    {
      name: "Real Feel",
      icon: "/assets/real-feel-icon.svg",
      value: realFeel
    },
    {
      name: "Wind",
      icon: "/assets/wind-icon.svg",
      value: windSpeed
    },
    {
      name: "Chance of Rain",
      icon: "/assets/raindrop-icon.svg",
      value: rainProbability
    },
    {
      name: "UV Index",
      icon: "/assets/uv-icon.svg",
      value: uvIndex
    }
  ]

  const time = data?.date.split(": ")[1].slice(0, 4);
  const timeFormat = data?.date.split(": ")[1].slice(-3);
  const formattedTime = `${time}PM`;
  const formattedClock = formattedTime + " " + timeFormat;

  return (
    <div className="bg-secondary/40 rounded-[1.75rem] p-5 flex flex-col lg:flex-row items-center justify-between min-[1826px]:flex-col min-[1826px]:justify-evenly min-[1826px]:items-start relative overflow-hidden w-full gap-5 lg:gap-0">
      <Image src="/assets/wave-vector.svg" width={700} height={380} className="object-contain absolute min-[1826px]:bottom-10 min-[1826px]:top-auto lg:right-0 lg:top-[4.5rem] top-60 z-10" alt="Wavy Effect" />
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10 min-[970px]:h-[3.75rem] min-[970px]:w-[3.75rem]">
          <Image src="/assets/clock-icon.svg" fill className="object-contain" alt="Clock Icon" />
        </div>
        <span className="xl:text-3xl text-xl">{formattedClock}</span>
      </div>
      <h3 className="xl:text-3xl text-xl font-bold z-20">AIR CONDITIONS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-12 min-[1826px]:gap-24 self-center">
        {airConditions.map((condition, index) => (
          <div key={index} className="flex items-center gap-1 z-20">
            <div className="relative h-10 w-10 min-[970px]:h-[3.75rem] min-[970px]:w-[3.75rem]">
              <Image src={condition.icon} fill className="object-scale-down" alt={condition.name} />
            </div>
            <div className="flex flex-col text-xl">
              <span className="whitespace-nowrap">{condition.name}</span>
              <span className="whitespace-nowrap">{condition.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
