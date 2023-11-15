import Image from "next/image";
import "./air-conditions.css";

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
      value: realFeel,
    },
    {
      name: "Wind",
      icon: "/assets/wind-icon.svg",
      value: windSpeed,
    },
    {
      name: "Chance of Rain",
      icon: "/assets/raindrop-icon.svg",
      value: rainProbability,
    },
    {
      name: "UV Index",
      icon: "/assets/uv-icon.svg",
      value: uvIndex,
    },
  ];

  const time = data?.date.split(": ")[1].slice(0, 4);
  const timeFormat = data?.date.split(": ")[1].slice(-3);
  const formattedTime = `${time}PM`;
  const formattedClock = formattedTime + " " + timeFormat;

  return (
    <div className="air-conditions__main-container">
      <Image
        src="/assets/wave-vector.svg"
        width={700}
        height={380}
        className="air-conditions__wave-effect"
        alt="Wave Effect"
      />
      <div className="air-conditions__clock-container">
        <div className="air-conditions__clock-icon-container">
          <Image
            src="/assets/clock-icon.svg"
            fill
            className="air-conditions__clock-icon"
            alt="Clock Icon"
          />
        </div>
        <span className="air-conditions__clock-text">{formattedClock}</span>
      </div>
      <h3 className="air-conditions__label">AIR CONDITIONS</h3>
      <div className="air-conditions__conditions-container">
        {airConditions.map((condition, index) => (
          <div key={index} className="air-conditions__condition-container">
            <div className="air-conditions__condition-icon-container">
              <Image
                src={condition.icon}
                fill
                className="air-conditions__condition-icon"
                alt={condition.name}
              />
            </div>
            <div className="air-conditions__condition-label-container">
              <span className="air-conditions__condition-label">
                {condition.name}
              </span>
              <span className="air-conditions__condition-label">
                {condition.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
