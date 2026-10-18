import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Image de fond */}
      <Image
        src="/images/hero.jpg"
        alt="Lappi Wild"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenu */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">

        {/* Logo */}
        <div className="pointer-events-none opacity-30 translate-y-0">
          <Image
            src="/images/logo.png"
            alt="Lappi Wild"
            width={380}
            height={380}
            priority
          />
        </div>

        {/* Texte */}
        <div className="-mt-50 text-center">

         <h2 className="font-serif text-white text-4xl md:text-5xl xl:text-5xl font-medium tracking-[0.05em]">
  Fishing. Wilderness. Experience.
</h2>
          <p className="mt-6 uppercase tracking-[0.25em] text-white/90 text-sm md:text-base">
            Séjours d'exception en Laponie finlandaise
          </p>

          <a
          href="#stays"
          className="
          mt-10
          inline-flex
          items-center
          rounded-full
          bg-[#C9AE63]
          px-10
          py-3
          text-sm
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#B7924D]
          hover:shadow-xl
          "
          >
          Découvrir les séjours →
          </a>

        </div>

      </div>

    </section>
  );
}