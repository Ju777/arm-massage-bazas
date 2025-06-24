import Image from "next/image";

export default function Hero({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle: string }>) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gray-200 overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Massage bien-être"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center bg-white bg-opacity-70 p-6 rounded">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
