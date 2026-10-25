import FooterBadge from "../ui/FooterBadge";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 m-4 text-center">
      <small>
        Set the indoor temperature &copy; {new Date().getFullYear()}
      </small>
      <FooterBadge></FooterBadge>
    </footer>
  );
}
