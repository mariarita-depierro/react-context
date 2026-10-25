import { useThermostatContext } from "../../contexts/ThermostatContext";

export default function FooterBadge() {
  const { temperature } = useThermostatContext();

  return (
    <span className="bg-linear-to-r from-sky-500 to-red-500 text-white font-bold w-25 rounded-2xl p-1">
      {temperature}°C
    </span>
  );
}
