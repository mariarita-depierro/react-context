import { MenuIcon } from "lucide-react";
import { useState } from "react";
import ResetButton from "../ui/ResetButton";

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked((actual) => !actual);
  }

  return (
    <aside className="relative pt-2">
      <MenuIcon
        className="fixed top-22 right-2 cursor-pointer me-2"
        onClick={handleIsClicked}
      ></MenuIcon>
      {isClicked ? (
        <ResetButton className="absolute top-20 right-4 font-bold"></ResetButton>
      ) : (
        ""
      )}
    </aside>
  );
}
