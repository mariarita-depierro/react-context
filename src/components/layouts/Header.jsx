import { Thermometer } from "lucide-react";

export default function Header() {
  return (
    <header className="flex text-white justify-center p-4 h-14 bg-linear-to-r from-sky-500 to-red-500">
      <h1 className="text-2xl ">Discover the indoor temperature</h1>
      <Thermometer size={30} />
    </header>
  );
}
