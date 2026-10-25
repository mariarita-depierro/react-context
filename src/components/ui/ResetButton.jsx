import { useThermostatContext } from "../../contexts/ThermostatContext";

export default function ResetButton({ className = "" }) {
  const { handleResetTemperature } = useThermostatContext();
  return (
    <button
      className={`bg-linear-to-r from-sky-500 to-red-500 py-2 px-4 rounded-xl cursor-pointer text-white ${className}`}
      onClick={handleResetTemperature}
    >
      Reset
    </button>
  );
}
