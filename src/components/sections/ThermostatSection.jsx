export default function ThermostatSection({
  temperature,
  handleAddTemperature,
  handleResetTemperature,
  handleSubTemperature,
}) {
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl mb-4 text-center">{temperature}°C</h2>
      <div className="flex gap-2 self-center text-white">
        <button
          className="bg-sky-500 py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleAddTemperature}
        >
          Add
        </button>
        <button
          className="bg-yellow-400 py-2 px-4 rounded-xl cursor-pointer text-black"
          onClick={handleResetTemperature}
        >
          Reset
        </button>
        <button
          className="bg-red-500 py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleSubTemperature}
        >
          Sub
        </button>
      </div>
    </section>
  );
}
