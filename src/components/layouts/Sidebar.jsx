import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [menu, setMenu] = useState(false);

  function handleSetMenu() {
    setMenu((actual) => !actual);
  }

  return (
    <aside dir="ltr" className="border-s border-gray-400 ps-4 pe-4 pt-2">
      <MenuIcon onClick={handleSetMenu}></MenuIcon>
      {menu ? (
        <h2 className="me-4 pt-4">
          Sidebar: pulsante Reset che riporta la temperatura a 20°C
          {/* function handleResetTemperature() {
    setTemperature(20);
  }
  
  <button
            className="border bg-yellow-300 py-2 px-4 rounded-xl"
            onClick={handleResetTemperature}
          >
            Reset
          </button>

  */}
        </h2>
      ) : (
        ""
      )}
    </aside>
  );
}
