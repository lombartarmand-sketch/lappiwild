import StayCard from "./StayCard";

export default function StaySection() {
  return (
    <section
      id="stays"
      className="bg-lappi py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= TITRE ================= */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#C6A46A]">
            Les séjours
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1C2A22]">
            Deux façons de vivre la Laponie
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#5E665F]">
            Que vous découvriez la Laponie pour la première fois ou que vous souhaitiez vivre une immersion plus profonde, 
            chaque séjour est pensé comme une base que nous adaptons ensemble pour créer une aventure unique.
          </p>

        </div>

        {/* ================= SÉJOUR 1 ================= */}

        <StayCard
          title="Séjour Découverte"
          duration="4 jours"
          description="Un séjour rythmé pour découvrir un maximum de facettes de la Laponie en seulement quatre jours. Les activités s'enchaînent pour vous faire vivre une aventure riche, variée et pleine de découvertes."
          image="/images/sejours/decouverte.jpg"
        />

        {/* ================= ESPACE ================= */}

        <div className="h-24" />

        {/* ================= SÉJOUR 2 ================= */}

        <StayCard
          title="Séjour Immersion"
          duration="7 jours"
          description="Une semaine pour prendre le temps de vivre chaque activité, explorer les grands espaces lapons et personnaliser votre séjour selon vos envies."
          image="/images/sejours/immersion.jpg"
          reverse
        />

      </div>
    </section>
  );
}