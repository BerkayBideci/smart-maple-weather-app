import Header from "./components/header/header";
import Logo from "./components/logo/logo";
import HourlyForecast from "./components/hourly-forecast/hourly-forecast";
import Navbar from "./components/navbar/navbar";
import Activities from "./components/activities/activities";
import WeeklyForecast from "./components/weekly-forecast/weekly-forecast";
import AirConditions from "./components/air-conditions/air-conditions";
import data from "./db.json";

export default function App() {
  return (
    <main className="app__main-container">
      <div className="app__main-layout">
        <section className="app__top-section-container">
          <Header data={data} />
          <div className="app__top-right-section-container">
            <Logo />
            <HourlyForecast data={data} />
          </div>
        </section>
        <section className="app__bottom-section-container">
          <Navbar />
          <div className="app__bottom-middle-section-container">
            <Activities />
            <WeeklyForecast data={data} />
          </div>
          <AirConditions data={data} />
        </section>
      </div>
    </main>
  );
}
