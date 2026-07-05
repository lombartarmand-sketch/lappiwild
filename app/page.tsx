export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          🎣 Lappi Wild
        </h1>

        <p className="text-2xl mb-4">
          Séjours de pêche en Laponie finlandaise
        </p>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Découvrez des séjours uniques dédiés au brochet et à la truite,
          sur les lacs sauvages et les rivières de Laponie.
          Hébergement, bateau, matériel, permis, transferts et guide francophone inclus.
        </p>

        <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-semibold">
          Découvrir nos séjours
        </button>
      </div>
    </main>
  );
}