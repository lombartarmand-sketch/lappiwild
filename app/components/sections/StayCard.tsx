import Image from "next/image";
import { Fish, Bike, Trees, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";
type StayCardProps = {
  title: string;
  duration: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function StayCard({
  title,
  duration,
  description,
  image,
  reverse = false,
}: StayCardProps) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* ================= IMAGE ================= */}

      <div className="group relative overflow-hidden rounded-[32px] shadow-xl">
        <Image
          src={image}
          alt={title}
          width={900}
          height={650}
          className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* ================= TEXTE ================= */}

      <div className="max-w-xl">

        {/* Badge durée */}

        <span className="inline-flex rounded-full border border-[#D8C49B] bg-[#F7F1E3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7924D]">
          {duration}
        </span>

        {/* Titre */}

        <h3 className="mt-4 font-serif text-4xl leading-tight text-[#1C2A22]">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-5 text-base leading-7 text-[#5E665F]">
          {description}
        </p>

        {/* Activités */}

        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">

          <div className="flex items-center gap-2.5">
            <Fish
              size={18}
              strokeWidth={1.8}
              className="text-[#C6A46A]"
            />
            <span className="text-sm text-[#1C2A22]">
              Pêche guidée
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Bike
              size={18}
              strokeWidth={1.8}
              className="text-[#C6A46A]"
            />
            <span className="text-sm text-[#1C2A22]">
              Balade en quad
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Trees
              size={18}
              strokeWidth={1.8}
              className="text-[#C6A46A]"
            />
            <span className="text-sm text-[#1C2A22]">
              Randonnées
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Flame
              size={18}
              strokeWidth={1.8}
              className="text-[#C6A46A]"
            />
            <span className="text-sm text-[#1C2A22]">
              Moments de partage
            </span>
          </div>

        </div>

        {/* Bouton */}

        <Link
  href={title === "Séjour Découverte"
    ? "/sejours/decouverte"
    : "/sejours/immersion"}
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#C6A46A]
    px-8
    py-3
    text-xs
    font-medium
    uppercase
    tracking-[0.18em]
    text-whites
    transition-all
    duration-300
    hover:bg-[#B7924D]
    hover:-translate-y-1
    hover:shadow-lg
  "
>
  Découvrir le séjour →
</Link>

        {/* Saison */}

        <div className="mt-6 rounded-2xl border border-[#E8DFCF] bg-white/70 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-[#B7924D]">
            Disponible de juin à octobre
          </p>

          <p className="mt-2 text-sm leading-6 text-[#5E665F]">
            Du soleil de minuit aux couleurs flamboyantes de l'automne.
          </p>
        </div>

      </div>
    </div>
  );
}