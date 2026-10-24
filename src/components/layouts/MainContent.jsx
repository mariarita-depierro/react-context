import { useState } from "react";
/* import ThermostatSection from "../sections/ThermostatSection"; */

export default function MainContent() {
  const [temperature, setTemperature] = useState(20);

  function handleSetTemperature() {
    setTemperature((actual) => actual + 1);
  }

  function handleSubtractTemperature() {
    setTemperature((actual) => actual - 1);
  }

  function handleResetTemperature() {
    setTemperature(20);
  }

  return (
    <main className="grow m-4">
      <section className="flex flex-col">
        <h2 className="text-2xl mb-4 text-center">{temperature}</h2>
        <div className="flex gap-2 self-center">
          <button
            className="border bg-sky-400 py-2 px-4 rounded-xl"
            onClick={handleSetTemperature}
          >
            Add
          </button>
          <button
            className="border bg-yellow-300 py-2 px-4 rounded-xl"
            onClick={handleResetTemperature}
          >
            Reset
          </button>
          <button
            className="border bg-red-400 py-2 px-4 rounded-xl"
            onClick={handleSubtractTemperature}
          >
            Sub
          </button>
        </div>
      </section>

      {/* <ThermostatSection /> */}
    </main>
  );
}
