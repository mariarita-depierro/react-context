import Header from "./components/layouts/Header";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import Footer from "./components/layouts/Footer";

import { useState } from "react";

function App() {
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
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <MainContent
            temperature={temperature}
            handleAddTemperature={handleAddTemperature}
            handleSubTemperature={handleSubTemperature}
            handleResetTemperature={handleResetTemperature}
          />
          <Sidebar handleResetTemperature={handleResetTemperature} />
        </div>

        <Footer temperature={temperature} />
      </div>
    </div>
  );
}

export default App;

/* Creare una piccola web app in React con la struttura simile a quella vista a lezione: 
Header, Sidebar, ThermostatSection dentro al componente MainContent e Footer.

Gestire globalmente la temperatura di un termostato:
Valore iniziale 20 (°C), minimo 16, massimo 28, a step di 1
ThermostatSection: sezione dove mostrare la temperatura (es. 20°C) e i pulsanti Più, Meno e Reset
Sidebar: pulsante Reset che riporta la temperatura a 20°C
Footer: badge con il valore attuale (es. Termostato: 20°C)

Usare la Context API per passare i valori / funzioni di stato globali nei componenti che li richiedoni.

Bonus
I pulsanti Più e Meno devono essere disabilitati quando si raggiunge il limite minimo o massimo
Mostrare accanto alla temperatura un'etichetta testuale (Freddo / Comfort / Caldo) calcolata dal valore, senza creare un secondo stato (derived state). */
