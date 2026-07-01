const CONTACT_EMAIL = "tutoloop01@gmail.com";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-foreground text-cream">
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">
          一緒にこの街を
          <br className="sm:hidden" />
          盛り上げましょう！
        </h2>
        <p className="text-cream/70 text-sm">大阪大学 学生団体｜TUTOLOOP</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-4 inline-block bg-cream text-foreground font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
