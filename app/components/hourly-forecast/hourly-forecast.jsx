import Image from "next/image";
import "./hourly-forecast.css";

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
    <div className="hourly-forecast__main-container">
      <Image
        src="/assets/line-vector.svg"
        fill
        className="hourly-forecast__trajectory-line"
        alt="Trajectory Line"
      />
      <div className="hourly-forecast__ellipse-icon-container">
        <Image
          src="/assets/ellipse-icon.svg"
          fill
          className="hourly-forecast__ellipse-icon"
          alt="Current Point"
        />
      </div>
      <div className="hourly-forecast__yellow-line-container">
        <Image
          src="/assets/yellow-line-vector.svg"
          fill
          className="hourly-forecast__yellow-line"
          alt="Current Line"
        />
      </div>
      <div className="hourly-forecast__label-container">
        <div className="hourly-forecast__clock-icon-container">
          <Image
            src="/assets/hourly-clock.svg"
            fill
            className="hourly-forecast__clock-icon"
            alt="Clock Icon"
          />
        </div>
        <span className="hourly-forecast__label">Hourly Forecast</span>
      </div>
      <div className="hourly-forecast__forecast-container">
        {Object.entries(data.forecast).map(([time, temperature]) => (
          <div key={time} className="hourly-forecast__forecast-item-container">
            <span className="hourly-forecast__forecast-item-temperature-label">{`${temperature}°`}</span>
            <Image
              src={getTemperatureIcon(temperature)}
              width={16}
              height={16}
              alt={`Icon for ${temperature}°`}
            />
            <span className="hourly-forecast__forecast-item-time-label">
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
