import { useContext } from "react";
import ThermostatContext from "../../contexts/ThermostatContext";
import ResetButton from "../ui/ResetButton";

export default function ThermostatSection() {
  const { temperature, handleAddTemperature, handleSubTemperature } =
    useContext(ThermostatContext);

  /*Utilizzando uno stato derivato renderizziamo un etichetta testuale (Freddo / Comfort / Caldo) in base al valore del termostato*/
  const temperatureStatus = (temperature) =>
    temperature === 20 ? "Comfort" : temperature < 20 ? "Freddo" : "Caldo";
  return (
    <section className="flex flex-col items-center mt-10">
      <h2 className="text-5xl mb-4 ps-6">{temperature}°C</h2>
      <span className="text-black mb-4 uppercase">
        {temperatureStatus(temperature)}
      </span>
      <div className="flex gap-2 text-white font-bold">
        <button
          className="bg-sky-500 py-2 px-4 rounded-xl cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
          onClick={handleAddTemperature}
          disabled={temperature >= 28}
        >
          Add
        </button>
        <ResetButton></ResetButton>
        <button
          className="bg-red-600 py-2 px-4 rounded-xl cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
          onClick={handleSubTemperature}
          disabled={temperature <= 16}
        >
          Sub
        </button>
      </div>
    </section>
  );
}
