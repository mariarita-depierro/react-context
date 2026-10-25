import { useContext } from "react";
import ThermostatContext from "../../contexts/ThermostatContext";

export default function FooterBadge() {
  //Verifichiamo che il componente sia all'interno del Provider
  const context = useContext(ThermostatContext);
  if (!context) {
    throw new Error(
      "This component must be a child of the ThermostatContext provider component to access the context value with useContext()",
    );
  }

  const { temperature } = context;

  return (
    <span className="bg-linear-to-r from-sky-500 to-red-500 text-white font-bold w-25 rounded-2xl p-1">
      {temperature}°C
    </span>
  );
}
