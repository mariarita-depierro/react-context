import { useContext } from "react";
import ThermostatContext from "../../contexts/ThermostatContext";
import ResetButton from "../ui/ResetButton";

export default function ThermostatSection() {
  const { temperature, handleAddTemperature, handleSubTemperature } =
    useContext(ThermostatContext);
  return (
    <section className="flex flex-col items-center mt-10">
      <h2 className="text-5xl mb-6 ps-6">{temperature}°C</h2>
      <div className="flex gap-2 text-white font-bold">
        <button
          className="bg-sky-500 py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleAddTemperature}
        >
          Add
        </button>
        <ResetButton></ResetButton>
        <button
          className="bg-red-600 py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleSubTemperature}
        >
          Sub
        </button>
      </div>
    </section>
  );
}
