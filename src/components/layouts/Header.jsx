import { Thermometer } from "lucide-react";

export default function Header() {
  return (
    <header className="flex text-white justify-center p-5 bg-linear-to-r from-sky-500 to-red-500 font-bold uppercase">
      <h1 className="text-2xl ">Set the indoor temperature</h1>
      <Thermometer size={30} />
    </header>
  );
}
