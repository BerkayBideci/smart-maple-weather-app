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
    <div className="bg-secondary/40 rounded-[1.75rem] p-5 flex flex-col justify-evenly grow">
      <div className="flex items-center gap-2">
        <div className="relative h-[3.75rem] w-[3.75rem]">
          <Image src="/assets/clock-icon.svg" fill className="object-contain" alt="Clock Icon" />
        </div>
        <span className="text-3xl">{formattedClock}</span>
      </div>
      <h3 className="text-3xl font-bold">AIR CONDITIONS</h3>
      <div className="grid grid-cols-2 gap-24 justify-items-stretch">
        {airConditions.map((condition, index) => (
          <div key={index} className="flex">
            <div className="relative h-[3.75rem] w-[3.75rem]">
              <Image src={condition.icon} fill className="object-contain" alt={condition.name} />
            </div>
            <div className="flex flex-col text-xl">
              <span>{condition.name}</span>
              <span>{condition.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
