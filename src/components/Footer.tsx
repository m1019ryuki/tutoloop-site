export default function Footer() {
  return (
    <footer className="bg-[#1c1712] text-stone-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} TUTOLOOP</p>
        <p>大阪大学 学生団体</p>
      </div>
    </footer>
  );
}
