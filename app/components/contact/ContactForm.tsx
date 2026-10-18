export default function ContactForm() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-12 shadow-2xl">

        <h2 className="mb-12 text-center text-4xl font-light text-[#10261D]">
          Votre demande
        </h2>

        <form className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Nom */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Nom
            </label>
            <input
              type="text"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Prénom */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Prénom
            </label>
            <input
              type="text"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Adresse e-mail
            </label>
            <input
              type="email"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Téléphone
            </label>
            <input
              type="tel"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Nombre de personnes */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Nombre de personnes
            </label>
            <input
              type="number"
              min="1"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Date souhaitée */}
          <div>
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Date souhaitée
            </label>
            <input
              type="date"
              className="h-16 w-full rounded-xl border border-gray-300 px-5 text-lg outline-none transition focus:border-[#C6A46A]"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-lg font-medium text-[#10261D]">
              Décrivez votre projet
            </label>
            <textarea
              rows={7}
              className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-[#C6A46A]"
              placeholder="Parlez-nous de votre séjour idéal..."
            />
          </div>

          {/* Bouton */}
          <div className="md:col-span-2 flex justify-center pt-6">
            <button
              type="submit"
              className="rounded-full bg-[#10261D] px-12 py-5 text-xl font-medium text-white transition hover:bg-[#183528]"
            >
              Envoyer ma demande
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}