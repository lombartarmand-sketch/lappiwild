import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
type DayStepProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

function DayStep({ number, title, children }: DayStepProps) {
  return (
    <div className="py-16">

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="lg:w-36 flex-shrink-0">

          <span className="font-serif text-7xl lg:text-8xl leading-none text-[#D8C49B]">
            {number}
          </span>

        </div>

        <div className="flex-1">

          <h3 className="font-serif text-3xl text-[#1C2A22]">
            {title}
          </h3>

          <div className="mt-6 space-y-5 text-lg leading-8 text-[#5E665F]">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}
export default function Page() {
  return (
    <main className="bg-[#F7F4ED] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24">

        {/* Retour */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#5E665F] hover:text-[#1C2A22] transition-colors"
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </Link>

        {/* Hero */}

        <div className="mt-14 text-center">

          <span className="inline-flex items-center rounded-full border border-[#D8C49B] bg-white px-5 py-2 text-sm tracking-[0.25em] uppercase text-[#8B6B3F]">

            LAPPI WILD • 7 JOURS

          </span>

          <h1 className="mt-8 font-serif text-5xl md:text-6xl text-[#1C2A22]">

            Séjour Immersion

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#5E665F]">

            Conçu pour ceux qui souhaitent vivre la Laponie en profondeur, ce séjour vous invite à ralentir 
            pour profiter pleinement de chaque expérience. Ici, les activités ne se découvrent pas en quelques heures : 
            elles se vivent. Longues journées de pêche, aventure en quad au cœur des immenses forêts finlandaises, 
            rencontres authentiques et moments de partage rythment une semaine où l'on oublie le temps pour savourer chaque instant.

          </p>

        </div>
                {/* Description */}

        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
              Un séjour pensé pour la liberté
            </span>

            <h2 className="mt-4 font-serif text-4xl text-[#1C2A22] leading-tight">
              Prenez le temps de vivre pleinement la Laponie finlandaise.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#5E665F]">

              <p>
                Le séjour <strong className="text-[#1C2A22]">Immersion</strong> a été imaginé pour ceux qui souhaitent 
                vivre pleinement la Laponie. Ici, les activités prennent une toute autre dimension : les longues sessions de pêche, 
                les journées complètes en quad au cœur des immenses forêts finlandaises et les rencontres authentiques vous invitent 
                à ralentir pour profiter pleinement de chaque expérience. Plus qu'un simple voyage, c'est une semaine où l'on oublie 
                le temps pour vivre la nature à son rythme.
              </p>

              <p>
                Nous avons pensé à tout pour que vous puissiez profiter pleinement de votre séjour. 
                Tout le matériel de pêche ainsi que les équipements de protection nécessaires aux activités sont fournis. 
                Casque, gants et équipements de sécurité sont inclus : il ne vous reste plus qu'à vivre l'expérience.
              </p>

              <p>
                Et parce que la nature lapone se partage aussi avec quelques moustiques un peu trop curieux, nous avons pensé à tout ! 
                Un bob équipé d'une moustiquaire ainsi qu'une lampe anti-moustiques vous seront remis dès votre arrivée afin que 
                les seuls souvenirs que vous rapportiez de Laponie soient de magnifiques paysages... et quelques belles histoires à raconter.
              </p>

            </div>

          </div>

          <div className="relative h-[500px] lg:h-[620px] overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/sejours/immersion.jpg"
              alt="Séjour Immersion Lappi Wild"
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>
                {/* Votre séjour */}

        <div className="mt-32">

          <div className="text-center">

            <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
              Programme
            </span>

            <h2 className="mt-4 font-serif text-5xl text-[#1C2A22]">
              Votre séjour
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#5E665F]">
              Sept journées pour respirer l'air pur de la Laponie et prendre le temps de vivre chaque expérience. 
              Un séjour pensé pour explorer une nature préservée, profiter pleinement de chaque activité et partager 
              des moments authentiques.
            </p>

          </div>

        </div>
        <div className="mt-20">

  <DayStep
    number="01"
    title="Bienvenue en Laponie"
  >

    <p>
      Dès votre arrivée à l'aéroport, nous vous accueillons avant de prendre la route vers Aava sky village. 
      Un arrêt au supermarché vous permettra de faire vos courses pour la durée du séjour, 
      puis nous rejoindrons votre lodge où vous pourrez vous installer et découvrir les environs.
    </p>

    <p>
      Nous partagerons ensuite un pot d'accueil convivial afin de faire connaissance et de vous présenter le déroulement du séjour. 
      Selon votre heure d'arrivée, une première sortie pourra déjà vous offrir un aperçu des paysages lapons qui vous attendent.
    </p>

  </DayStep>

  <hr className="border-[#E8DFCF]" />

  <DayStep
    number="02"
    title="Premières aventures"
  >

    <p>
      Cette première journée d'activités débute à Aavasaksa Adventure, où vous découvrirez les quads lors d'une initiation 
      accompagnée de toutes les consignes de sécurité nécessaires. Après avoir rencontré les chiens du parc, nous partirons 
      pour une balade en quad au cœur de la nature lapone avant de rejoindre le lodge pour le déjeuner.
    </p>

    <p>
      L'après-midi, nous partirons à la découverte du Kruununpuisto, où nature et histoire se rencontrent. 
      Selon la saison, vous pourrez également partir à la cueillette de baies sauvages. Pour terminer cette belle journée, 
      direction les rives du Portimojärvi pour une première session de pêche, ponctuée d'un repas en pleine nature.
    </p>

  </DayStep>

  <hr className="border-[#E8DFCF]" />

  <DayStep
    number="03"
    title="La grande aventure en quad"
  >

    <p>
      Après deux premières journées consacrées à la découverte de la Laponie, place à une véritable immersion. 
      Prenez les commandes de votre quad pour une journée complète à travers les immenses forêts finlandaises. Entre pistes sauvages, 
      paysages préservés et pauses au cœur de la nature, cette aventure vous fera découvrir une Laponie authentique. Le déjeuner sera 
      partagé en pleine nature autour d'un feu de camp.
    </p>

    <p>
     Cette journée vous fera découvrir toute la beauté des grands espaces lapons. Entre pistes forestières, panoramas sauvages et moments 
     de partage, chaque kilomètre parcouru vous rapprochera un peu plus de la nature finlandaise. En fin de journée, retour au lodge après 
     une aventure riche en émotions et en souvenirs.
    </p>

  </DayStep>

  <hr className="border-[#E8DFCF]" />

  <DayStep
    number="04"
    title="Entre lac et forêt"
  >

    <p>
      Cette nouvelle journée vous emmène sur les eaux sauvages du Miekojärvi, l'un des plus beaux lacs de la région. 
      À bord du bateau, nous partirons à la recherche des carnassiers dans un environnement préservé, loin de toute agitation.
    </p>

    <p>
     Après cette matinée sur l'eau, nous partagerons un repas traditionnel finlandais dans un kota à Pessalompolo, 
      avant de poursuivre la journée par une balade en forêt pour découvrir une autre facette de la nature lapone.
    </p>

  </DayStep>

    <DayStep
    number="05"
    title="Traditions & Rivière sauvage"
  >

    <p>
      Partez à la rencontre d'éleveurs passionnés pour découvrir leur quotidien et les traditions qui entourent l'élevage 
      des rennes en Laponie. Durant l'été, les rennes vivent en liberté dans les immenses étendues lapones. Cette visite est 
      donc avant tout l'occasion d'échanger avec les éleveurs et de mieux comprendre leur mode de vie, profondément lié à la nature 
      et aux saisons.
    </p>

    <p>
     L'après-midi, prenez les commandes de votre quad en direction de la Tiskiniva River. En empruntant les pistes forestières, gardez 
     l'œil ouvert : il n'est pas rare d'apercevoir des rennes en liberté au détour d'un chemin. Une fois arrivés au bord de cette rivière 
     sauvage et préservée, profitez d'une session de pêche dans un cadre exceptionnel, loin de toute agitation.
    </p>

  </DayStep>

  <hr className="border-[#E8DFCF]" />

    <DayStep
    number="06"
    title="Journée en toute liberté"
  >

    <p>
      Après plusieurs journées riches en découvertes et en aventures, cette journée vous appartient. Profitez-en pour vous 
      détendre au lodge, repartir pêcher dans les environs, explorer les paysages lapons à votre rythme ou simplement savourer le 
      calme de la nature.
    </p>

    <p>
     Pour ceux qui souhaitent prolonger l'expérience, plusieurs activités optionnelles sont également proposées. Initiez-vous à la 
     fabrication d'une kuksa, partez en balade en forêt avec les chiens ou laissez-vous tenter par d'autres expériences selon vos envies. 
     Une journée entièrement libre, à vivre comme vous l'imaginez.
    </p>

  </DayStep>

  <hr className="border-[#E8DFCF]" />

  <DayStep
    number="07"
    title="Profiter jusqu'au dernier instant"
  >

    <p>
      Avant de prendre la route vers l'aéroport, nous partagerons un dernier moment convivial autour d'un débriefing du séjour et de 
      l'élection du meilleur pêcheur. Ce sera l'occasion de revenir sur les plus beaux souvenirs de la semaine, d'échanger une dernière 
      fois et de clôturer cette belle aventure dans la bonne humeur.
    </p>

    <p>
     Chaque participant repartira également avec un souvenir en bois gravé Lappi Wild, un petit morceau de Laponie à emporter chez soi. 
     Nous vous accompagnerons ensuite jusqu'à l'aéroport, en espérant que ce séjour vous laissera des souvenirs inoubliables et l'envie de 
     revenir explorer les grands espaces lapons.
    </p>

  </DayStep>

</div>
      </section>
      {/* Personnalisez votre séjour */}

<section className="mt-24">

  <div className="rounded-[32px] border border-[#E6DDCF] bg-white px-8 py-16 text-center shadow-sm">

    <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
      Personnalisez votre séjour
    </span>

    <h2 className="mt-4 font-serif text-4xl text-[#1C2A22]">
      Envie d'aller plus loin ?
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5E665F]">
      Découvrez ici la liste des activités optionnelles qui viendront compléter votre séjour afin de ne 
      rien manquer de votre aventure en Laponie.
    </p>

    <Link
      href="/activites?from=immersion"
      className="inline-flex items-center justify-center mt-12 rounded-full bg-[#B7924D] px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#A68442] hover:scale-105"
    >
      Découvrir les activités optionnelles
    </Link>

  </div>

</section>
      {/* Tarif */}

<section className="mt-2">

  <div className="rounded-[32px] border border-[#E6DDCF] bg-white p-10 lg:p-14 shadow-sm">

    <div className="text-center">

      <span className="text-sm uppercase tracking-[0.25em] text-[#8B6B3F]">
        Votre séjour en toute transparence
      </span>

      <h2 className="mt-4 font-serif text-5xl text-[#1C2A22]">
        À partir de 2 490 € / personne
      </h2>

      <p className="mt-4 text-[#5E665F]">
        Le tarif peut varier selon la période et le nombre de participants.
      </p>

    </div>

    <div className="mt-14 grid lg:grid-cols-2 gap-12">

      <div>

        <h3 className="font-serif text-2xl text-[#1C2A22]">
          Le séjour comprend
        </h3>

        <ul className="mt-6 space-y-4 text-lg text-[#5E665F]">

          <li>✅ Hébergement</li>

          <li>✅ Accueil et transferts depuis / vers l'aéroport</li>

          <li>✅ Guide francophone</li>

          <li>✅ Permis de pêche</li>

          <li>✅ Matériel de pêche</li>

          <li>✅ Casque et équipements de sécurité</li>

          <li>✅ Transport pendant tout le séjour</li>

          <li>✅ Souvenir Lappi Wild</li>

        </ul>

      </div>

      <div>

        <h3 className="font-serif text-2xl text-[#1C2A22]">
          Le séjour ne comprend pas
        </h3>

        <ul className="mt-6 space-y-4 text-lg text-[#5E665F]">

          <li>❌ Trajet aérien jusqu'en Finlande</li>

          <li>❌ Nourriture et boissons (courses effectuées ensemble à votre arrivée)</li>

          <li>❌ Dépenses personnelles</li>

        </ul>

      </div>

    </div>

  </div>

</section>
      {/* CTA */}

      <section className="mt-32 pb-24">

        <div className="rounded-[32px] bg-[#1C2A22] px-8 py-20 text-center shadow-xl">

          <span className="text-sm uppercase tracking-[0.25em] text-[#D8C49B]">
            LAPPI WILD
          </span>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-white">
            Prêt à vivre votre séjour Immersion ?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#D8D6CF]">
            Vous souhaitez obtenir davantage d'informations ou réserver votre
            séjour ? Contactez-nous, nous répondrons avec plaisir à toutes vos
            questions et construirons ensemble votre aventure en Laponie.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-12 rounded-full bg-[#B7924D] px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#A68442] hover:scale-105"
          >
            Demander ce séjour
          </Link>

        </div>

      </section>
    </main>
  );
}