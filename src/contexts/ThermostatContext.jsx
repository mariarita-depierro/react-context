import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

/* 1. Definizione del contesto */
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

//3. Definiamo un custom hook per consumare il contesto
//eslint-disable-next-line
export function useThermostatContext() {
  const context = useContext(ThermostatContext);
  //Verifichiamo che il componente sia all'interno del Provider
  if (!context) {
    throw new Error(
      "This component must be a child of the ThermostatContext provider component to access the context value with useContext()",
    );
  }
  return context;
}
