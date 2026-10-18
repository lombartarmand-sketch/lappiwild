"use client";
import Image from "next/image";
import { useState } from "react";

const locations = [
  {
    id: "aava-sky-village",
    title: "Aava Sky Village",
    image: "/images/horizons/aava-sky-village.jpg",
    top: "50%",
    left: "23%",
    description:
      "Niché sur les hauteurs du mont Aavasaksa, Aava Sky Village est le lieu idéal pour profiter d'un repos bien mérité entre vos activités. Son lodge chaleureux, équipé d'un sauna et de tout le confort nécessaire, vous invite à vous ressourcer.",
  },
  {
    id: "santa-river-house",
    title: "Santa River House",
    image: "/images/horizons/santa-river-house.jpg",
    top: "57%",
    left: "20%",
    description:
      "Véritable maison traditionnelle finlandaise, Santa River House est une halte chaleureuse où le temps semble suspendu. Dégustez un café accompagné de pâtisseries artisanales tout en admirant la Torne River.",
  },
  {
    id: "kruununpuisto-national-park",
    title: "Parc national de Kruununpuisto",
    image: "/images/horizons/kruununpuisto.jpg",
    top: "45%",
    left: "24%",
    description:
      "Le parc Kruununpuisto vous invite à découvrir une faune et une flore lapones d'une grande diversité durant l'été. Véritable lieu chargé d'histoire, il offre de magnifiques panoramas.",
  },
  {
    id: "torne-beach",
    title: "Plage de la Torne",
    image: "/images/horizons/torne-beach.jpg",
    top: "52%",
    left: "19%",
    description:
      "Les rives de la Torne River dévoilent de magnifiques petites plages propices à la baignade. Profitez du calme de l'une des plus grandes rivières libres d'Europe.",
  },
  {
    id: "meikojarvi-lake",
    title: "Lac Miekojärvi",
    image: "/images/horizons/meikojarvi-lake.jpg",
    top: "12%",
    left: "85%",
    description:
      "Le lac Miekojärvi séduit par ses eaux claires et ses larges baies abritées, idéales pour une sortie en bateau ou une partie de pêche.",
  },
  {
    id: "tiskiniva-river",
    title: "Rivière Tiskiniva",
    image: "/images/horizons/tiskiniva-river.jpg",
    top: "45%",
    left: "50%",
    description:
      "Située entre les lacs Portimojärvi et Lohijärvi, la rivière Tiskiniva est un véritable paradis pour les amateurs de pêche.",
  },
  {
    id: "passalompolo-forest",
    title: "Forêt de Passalompolo",
    image: "/images/horizons/passalompolo-forest.jpg",
    top: "25%",
    left: "85%",
    description:
      "Cette fabuleuse forêt est un lieu magique où les couleurs évoluent au fil de votre promenade. Découvrez cette forêt dense, abritant une flore lapone exceptionnelle.",
  },
];

export default function HorizonsSection() {
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof locations)[number] | null
  >(null);

  return (
  <section
    id="horizons"
    className="py-20 bg-[#F8F5EF]"
  >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-title text-[#1C2A22]">
            Nos Horizons
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Carte */}
          <div className="lg:col-span-3">

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

              <img
                src="/images/map/horizons-map.jpg"
                alt="Carte"
                className="w-full h-auto"
              />

              {locations.map((location) => (
              <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`absolute z-50 rounded-full border-2 border-white transition-all duration-300 ${
              selectedLocation?.id === location.id
              ? "w-6 h-6 bg-[#10261D] scale-125"
              : "w-5 h-5 bg-[#C6A46A]"
              }`}
              style={{
              top: location.top,
              left: location.left,
              }}
              />
              ))}

            </div>

          </div>

          {/* Panneau */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[#E8E2D5]">

              {selectedLocation ? (
  <>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
      <img
        src={selectedLocation.image}
        alt={selectedLocation.title}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-3xl font-title text-[#1C2A22] mb-4">
      {selectedLocation.title}
    </h3>

    <p className="text-[#4B4B4B] leading-8">
      {selectedLocation.description}
    </p>
  </>
) : (
  <div className="flex flex-col items-center justify-center text-center h-full">

    <Image
      src="/logo.png"
      alt="Lappi Wild"
      width={220}
      height={220}
      className="mb-8 opacity-90"
    />

    <h3 className="text-3xl font-title text-[#1C2A22] mb-4">
      Explorez la carte
    </h3>

    <p className="text-[#4B4B4B] leading-8 max-w-sm">
      Sélectionnez un point sur la carte pour découvrir un lieu emblématique
      de nos horizons en Laponie.
    </p>

  </div>
)}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}