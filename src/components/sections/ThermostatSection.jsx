import { useState } from "react";

export default function ThermostatSection() {
  const [temperature, setTemperature] = useState(20);

  function handleAddTemperature() {
    setTemperature((actual) => actual + 1);
  }

  function handleSubTemperature() {
    setTemperature((actual) => actual - 1);
  }

  function handleResetTemperature() {
    setTemperature(20);
  }
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl mb-4 text-center">{temperature}</h2>
      <div className="flex gap-2 self-center">
        <button
          className="border bg-sky-400 py-2 px-4 rounded-xl"
          onClick={handleAddTemperature}
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
          onClick={handleSubTemperature}
        >
          Sub
        </button>
      </div>
    </section>
  );
}
