export default function Footer() {
  return (
    <footer className="py-20 text-center">
      <p className="text-[10px] tracking-[0.2em] font-bold uppercase opacity-40">
        © {new Date().getFullYear()} Mai
      </p>
    </footer>
  );
}
