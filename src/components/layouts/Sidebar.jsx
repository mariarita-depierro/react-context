import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ handleResetTemperature }) {
  const [menu, setMenu] = useState(false);

  function handleSetMenu() {
    setMenu((actual) => !actual);
  }

  return (
    <aside dir="ltr" className="border-s border-gray-400 ps-4 pe-4 pt-2">
      <MenuIcon onClick={handleSetMenu}></MenuIcon>
      {menu ? (
        <button
          className="me-4 mt-4 border bg-yellow-500 py-2 px-4 rounded-xl cursor-pointer"
          onClick={handleResetTemperature}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </aside>
  );
}
