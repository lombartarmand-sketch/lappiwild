import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Activity from "../components/Activity";

type PageProps = {
  searchParams: Promise<{
    from?: string;
  }>;
};

export default async function ActivitesPage({
  searchParams,
}: PageProps) {
  const { from } = await searchParams;
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      {/* Hero */}

      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/activites/hero.jpg"
          alt="Activités optionnelles"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            
            <h1 className="mt-6 font-serif text-5xl md:text-7xl">
              Activités optionnelles
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Personnalisez votre aventure en découvrant toutes les
              expériences que nous proposons au cœur de la Laponie
              finlandaise.
            </p>
          </div>
        </div>
      </section>
            {/* Présentation */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-[32px] border border-[#E6DDCF] bg-white px-8 py-16 text-center shadow-sm">

          <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
            Agrémentez votre séjour
          </span>

          <h2 className="mt-5 font-serif text-4xl text-[#1C2A22]">
            Des expériences qui vous ressemblent
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5E665F]">
            Toutes les activités présentées sur cette page peuvent être
            ajoutées à votre séjour afin de créer une expérience encore plus
            personnelle.
            <br />
            <br />
            Que vous souhaitiez prolonger un moment de pêche, découvrir les
            traditions lapones, explorer les sentiers en Fat Bike ou partir à
            la recherche des aurores boréales, nous construirons ensemble un
            programme adapté à vos envies et à la saison de votre voyage.
          </p>

        </div>

      </section>

           <Activity
  title="Balade en forêt avec les chiens nordiques"
  subtitle="Partager un moment privilégié"
  image="/images/activites/chiens.jpg"
  imageAlt="Balade avec les chiens nordiques"
  imagePosition="left"
  badges={[
    "⏱ 2 à 3 heures",
    "🌿 Été • Automne",
    "🥾 Accessible à tous",
  ]}
>
  <>
    Découvrez la forêt lapone accompagné de chiens nordiques habitués aux
    grands espaces.
    <br />
    <br />
    Cette balade est l'occasion de partager un moment privilégié avec eux
    tout en profitant du calme de la nature. Une activité conviviale,
    accessible à tous, qui vous permettra de découvrir la Laponie sous un
    autre regard.
  </>
</Activity>
            <Activity
  title="Fabrication d'une Kuksa"
  subtitle="L'artisanat traditionnel lapon"
  image="/images/activites/kuksa.jpg"
  imageAlt="Fabrication d'une kuksa"
  imagePosition="right"
  badges={[
    "🪵 Artisanat",
    "⏱ 2 à 3 heures",
    "🎁 Vous repartez avec votre création",
  ]}
>
  <>
    Découvrez le savoir-faire traditionnel lapon en sculptant votre propre
    kuksa, la célèbre tasse en bois utilisée depuis des générations.
    <br />
    <br />
    Guidé pas à pas, vous façonnerez un objet unique que vous conserverez
    comme souvenir de votre séjour en Laponie.
  </>
</Activity>
           <Activity
  title="Découverte de la Laponie en Fat Bike"
  subtitle="Explorer autrement"
  image="/images/activites/fatbike.jpg"
  imageAlt="Balade en Fat Bike"
  imagePosition="left"
  badges={[
    "🚴 Accessible à tous",
    "🌲 Nature",
    "⏱ Demi-journée",
  ]}
>
  <>
    Parcourez les sentiers forestiers et les paysages lapons à vélo grâce au
    Fat Bike.
    <br />
    <br />
    Ses larges pneus offrent confort et stabilité, permettant de profiter
    pleinement de la nature dans une ambiance calme et immersive.
  </>
</Activity>
           <Activity
  title="Initiation à la pêche à la mouche"
  subtitle="Une autre approche de la rivière"
  image="/images/activites/mouche.jpg"
  imageAlt="Pêche à la mouche"
  imagePosition="right"
  badges={[
    "🎣 Initiation",
    "🌊 Rivière",
    "⏱ Demi-journée",
  ]}
>
  <>
    Découvrez les bases de la pêche à la mouche dans un cadre naturel
    exceptionnel.
    <br />
    <br />
    Une activité idéale pour apprendre les premiers gestes tout en profitant
    de la beauté des rivières de Laponie.
  </>
</Activity>
            <Activity
  title="Chasse aux aurores boréales"
  subtitle="Quand le ciel s'illumine"
  image="/images/activites/aurores.jpg"
  imageAlt="Aurores boréales"
  imagePosition="left"
  badges={[
    "❄ Automne",
    "🌌 Nuit",
    "📷 Photographie",
  ]}
>
  <>
    Lorsque les conditions sont réunies, partez observer l'un des plus beaux
    spectacles naturels au monde.
    <br />
    <br />
    Loin de toute pollution lumineuse, vivez un moment inoubliable sous les
    aurores boréales et repartez avec des souvenirs exceptionnels.
  </>
</Activity>
            {/* Conclusion */}

      <section className="mx-auto max-w-5xl px-6 py-28">

        <div className="rounded-[32px] border border-[#E6DDCF] bg-white px-8 py-16 text-center shadow-sm">

          <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
            Votre aventure commence ici
          </span>

          <h2 className="mt-5 font-serif text-4xl text-[#1C2A22]">
            Créez un séjour à votre image
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5E665F]">
            Chaque voyage en Laponie est unique.
            <br />
            <br />
            Choisissez les expériences qui vous inspirent le plus et nous
            construirons ensemble un séjour adapté à vos envies, à la saison
            et au rythme que vous souhaitez donner à votre aventure.
          </p>

          <Link
          href={
          from === "immersion"
          ? "/sejours/immersion"
          : "/sejours/decouverte"
          }
  className="mt-12 inline-flex items-center justify-center rounded-full bg-[#B7924D] px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#A68442] hover:scale-105"
>
  ← Retour au séjour
</Link>

        </div>

      </section>
    </main>
  );
}