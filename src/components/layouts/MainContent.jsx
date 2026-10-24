import ThermostatSection from "../sections/ThermostatSection";

export default function MainContent({
  temperature,
  handleAddTemperature,
  handleSubTemperature,
  handleResetTemperature,
}) {
  return (
    <main className="grow m-4">
      <ThermostatSection
        temperature={temperature}
        handleAddTemperature={handleAddTemperature}
        handleSubTemperature={handleSubTemperature}
        handleResetTemperature={handleResetTemperature}
      />
    </main>
  );
}
