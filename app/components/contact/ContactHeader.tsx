import Link from "next/link";
import Image from "next/image";

export default function ContactHeader() {
  return (
    <header className="bg-[#10261D] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Mobile : logo + retour */}
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Lappi Wild"
              width={150}
              height={80}
              priority
            />
          </Link>

          <Link
            href="/"
            className="whitespace-nowrap rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#C6A46A]"
          >
            ← Retour
          </Link>
        </div>

        {/* Desktop : logo / titre / retour */}
        <div className="hidden lg:grid lg:grid-cols-[220px_1fr_220px] items-center">
          
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Lappi Wild"
                width={150}
                height={80}
                priority
              />
            </Link>
          </div>

          <div className="text-center mt-4 lg:mt-6">
            <h1 className="text-7xl font-title text-white">
              Préparez votre aventure
            </h1>

            <p className="mt-12 text-2xl leading-relaxed text-white/90">
              Chaque séjour est organisé sur mesure afin de vous offrir une
              expérience authentique au cœur de la Laponie finlandaise.
            </p>
          </div>

          <div className="flex justify-end">
            <Link
              href="/"
              className="whitespace-nowrap rounded-full border border-white/30 px-6 py-3 text-xl font-medium transition-colors duration-300 hover:text-[#C6A46A]"
            >
              ← Retour
            </Link>
          </div>
        </div>

        {/* Mobile : titre dessous */}
        <div className="mt-12 text-center lg:hidden">
          <h1 className="text-5xl font-title text-white leading-tight">
            Préparez votre aventure
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-white/90">
            Chaque séjour est organisé sur mesure afin de vous offrir une
            expérience authentique au cœur de la Laponie finlandaise.
          </p>
        </div>

      </div>
    </header>
  );
}