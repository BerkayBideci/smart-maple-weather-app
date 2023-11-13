import Header from "./components/header"
import Navbar from "./components/navbar"
import Activities from "./components/activities"
import WeeklyForecast from "./components/weekly-forecast"
import HourlyForecast from "./components/hourly-forecast"
import AirConditions from "./components/air-conditions"
import data from "./db.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-clouds bg-cover bg-no-repeat">
      <div className="text-primary py-6 px-9">
        <section className="flex">
          <Header data={data} />
          <HourlyForecast data={data} />
        </section>
        <section className="flex gap-x-6 pt-9">
          <Navbar />
          <div className="flex flex-col gap-y-5">
            <Activities />
            <WeeklyForecast data={data} />
          </div>
          <AirConditions data={data} />
        </section>
      </div>
    </main>
  )
}
