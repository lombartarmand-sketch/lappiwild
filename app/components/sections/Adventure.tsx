import Image from "next/image";

import {
  BedDouble,
  Languages,
  MapPinned,
  Users,
  Backpack,
  Trees,
} from "lucide-react";

import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: BedDouble,
    title: "Hébergement",
    subtitle: "confortable",
  },
  {
    icon: Languages,
    title: "Guide",
    subtitle: "francophone",
  },
  {
    icon: MapPinned,
    title: "Activités",
    subtitle: "encadrées",
  },
  {
    icon: Users,
    title: "Petits",
    subtitle: "groupes",
  },
  {
    icon: Backpack,
    title: "Matériel",
    subtitle: "fourni",
  },
  {
    icon: Trees,
    title: "Nature",
    subtitle: "préservée",
  },
];

export default function Adventure() {
  return (
    <section
  id="adventure"
  className="bg-lappi py-20 px-8"
>
      <div className="mx-auto grid max-w-[1500px] items-center gap-20 lg:grid-cols-[1fr_1.15fr]">

        {/* ================= COLONNE GAUCHE ================= */}

        <div>

          <div className="mb-4 flex items-center gap-16">

            <span className="text-[13px] font-semibold uppercase tracking-[0.30em] text-[#A9833E]">
              Votre aventure
            </span>

            <div className="h-px w-20 bg-[#A9833E]/60"></div>

          </div>

          <h2 className="font-serif text-4xl md:text-5xl xl:text-5xl leading-tight text-[#1F1F1F]">
            Votre voyage
            <br />
            au cœur de la Laponie
          </h2>

          {/* Séparateur */}

          <div className="my-8 flex items-center">

            <div className="h-px w-14 bg-[#A9833E]/50"></div>

            <svg
              width="72"
              height="24"
              viewBox="0 0 72 24"
              className="mx-5 text-[#A9833E]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 20L12 15H10L14 10H12L16 4L20 10H18L22 15H20L24 20H8Z"
                fill="currentColor"
                opacity="0.65"
              />

              <path
                d="M27 22L32 16H30L35 10H33L38 2L43 10H41L46 16H44L49 22H27Z"
                fill="currentColor"
              />

              <path
                d="M48 20L52 15H50L54 10H52L56 4L60 10H58L62 15H60L64 20H48Z"
                fill="currentColor"
                opacity="0.65"
              />
            </svg>

            <div className="h-px w-14 bg-[#A9833E]/50"></div>

          </div>

          <p className="mb-4 text-lg leading-7 text-[#5E665F]">
            Nos séjours s'adressent à toutes celles et ceux qui souhaitent découvrir 
            la Laponie dans une ambiance conviviale. Plus qu'un simple programme d'activités, 
            nous créons des expériences où la pêche, le quad, la randonnée, les repas en pleine nature 
            et la découverte des traditions se vivent comme autant de moments de partage.
          </p>

          <p className="mb-4 text-lg leading-7 text-[#5E665F]">
            Les séjours présentés sur notre site sont conçus comme une source d'inspiration. 
            Si une activité vous attire davantage qu'une autre, nous adaptons ensemble votre programme 
            afin de créer un séjour qui vous ressemble. Parce que chaque voyageur est différent, 
            votre aventure en Laponie peut l'être aussi.
          </p>

          {/* Les cartes */}

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

            {features.map((feature) => (

              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
              />

            ))}

          </div>

        </div>

        {/* ================= COLONNE DROITE ================= */}

        <div className="relative">

          {/* Halo décoratif */}

          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#C6A46A]/15 blur-3xl"></div>

          <Image
            src="/images/campfire.jpg"
            alt="Lappi Wild"
            width={700}
            height={900}
            priority
            className="
            relative
            z-10
            h-[580px]
            w-full
            object-cover
            rounded-[36px]
            shadow-2xl
            transition-transform
            duration-700
            hover:scale-[1.015]
            "
          />

          {/* Cartouche */}

          <div
            className="
              absolute
              -bottom-0
              left-8
              z-20
              text-2xl
              bg-white/95
              px-8
              py-6
              shadow-xl
              backdrop-blur-md
              rounded-2xl
            "
          >

            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#A9833E]">
              Lappi Wild
            </p>

            <h3 className="font-serif text-3xl text-[#1F1F1F]">
              Une aventure
              <br />
              authentique
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}