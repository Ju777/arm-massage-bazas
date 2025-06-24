import Image from "next/image";

export default function Hero({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle: string }>) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-light">
      <Image
        src="/images/hero.jpg"
        alt="Massage bien-être"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 text-center bg-white/70 p-6 rounded-xl shadow-lg animate-fade-in-up">
        <h1 className="text-4xl font-title text-primary mb-2">{title}</h1>
        <p className="text-xl text-dark">{subtitle}</p>
      </div>
    </section>
  );
}
