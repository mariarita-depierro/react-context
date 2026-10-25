import { useState } from "react";
import { createContext } from "react";

/* Definizione del contesto */
const ThermostatContext = createContext();

//2. Definizione del componente Provider
export function ThermostatContextProvider({ children }) {
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
    <ThermostatContext
      value={{
        temperature,
        handleAddTemperature,
        handleResetTemperature,
        handleSubTemperature,
      }}
    >
      {children}
    </ThermostatContext>
  );
}

export default ThermostatContext;
