export default function Footer({ temperature }) {
  return (
    <footer className="grid grid-cols-2 m-4 text-center">
      <small>
        Discover the indoor temperature &copy; {new Date().getFullYear()}
      </small>
      <span className="bg-linear-to-r from-sky-500 to-red-500 text-white font-bold w-25 rounded-2xl p-1">
        {temperature} °C
      </span>
    </footer>
  );
}
