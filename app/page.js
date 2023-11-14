import Header from "./components/header"
import Navbar from "./components/navbar"
import Activities from "./components/activities"
import WeeklyForecast from "./components/weekly-forecast"
import HourlyForecast from "./components/hourly-forecast"
import AirConditions from "./components/air-conditions"
import Logo from "./components/logo"
import data from "./db.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-clouds bg-cover bg-no-repeat">
      <div className="text-primary py-6 px-6 md:px-8">
        <section className="flex flex-col 2xl:flex 2xl:flex-row 2xl:items-center">
          <Header data={data} />
          <div className="flex flex-col sm:flex-row 2xl:flex-col items-center 2xl:items-stretch 2xl:grow 2xl:gap-7 gap-6 pt-6 md:pt-0">
            <Logo />
            <HourlyForecast data={data} />
          </div>
        </section>
        <section className="flex flex-col 2xl:flex-row gap-y-6 2xl:gap-x-7 2xl:pt-7 pt-6 xl:max-[1825px]:flex-wrap">
          <Navbar />
          <div className="flex flex-col 2xl:gap-y-5 gap-y-6 grow">
            <Activities />
            <WeeklyForecast data={data} />
          </div>
          <AirConditions data={data} />
        </section>
      </div>
    </main>
  )
}
