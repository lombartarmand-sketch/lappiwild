"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "Tout",
  "Pêche",
  "Nature",
  "Aurores",
  "Hébergement",
  "Expérience",
];

const photos = [
  {
    src: "/images/gallery/gallery-1-new.jpg",
    category: "Pêche",
    title: "Brochet de Laponie",
  },
  {
    src: "/images/gallery/Breme-Didier.jpg",
    category: "Pêche",
    title: "Brème de Laponie",
  },
  {
    src: "/images/gallery/Perche-Didier-new.jpg",
    category: "Pêche",
    title: "Perche de Laponie",
  },
  {
    src: "/images/gallery/Chevesne-Armand.png",
    category: "Pêche",
    title: "Chevesne de Laponie",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    category: "Nature",
    title: "Récolte de myrtilles",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    category: "Nature",
    title: "Myrtiller sauvage",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    category: "Expérience",
    title: "Site de pêche Torne river",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    category: "Expérience",
    title: "Journée sur l'eau",
  },
  {
    src: "/images/gallery/BBQ-Laavu.jpg",
    category: "Expérience",
    title: "Barbecue au Laavu",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    category: "Hébergement",
    title: "Aava Sky Village",
  },
];

export default function GallerySection() {

  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
  selectedCategory === "Tout"
    ? photos
    : photos.filter(
        (photo) => photo.category === selectedCategory
      );
      const activePhoto =
  selectedPhotoIndex !== null
    ? filteredPhotos[selectedPhotoIndex]
    : null;

  return (
    <section
      id="gallery"
      className="py-32 bg-[#F8F5EF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#C6A46A] text-sm mb-4">
            Galerie
          </p>

          <h2 className="text-5xl font-title text-[#1C2A22] mb-8">
            Découvrez la Laponie
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#4B4B4B]">
            Quelques aperçus des paysages, activités et expériences
            qui vous attendent en Laponie finlandaise.
          </p>

        </div>
      
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((category) => (
          <button
  key={category}
  onClick={() => setSelectedCategory(category)}
  className={`px-6 py-3 rounded-full transition-all duration-300 ${
    selectedCategory === category
        ? "bg-[#10261D]/80 backdrop-blur-md text-[#F4E8C7] border border-[#C6A46A]"
  : "border border-[#C6A46A] text-[#1C2A22] hover:bg-[#C6A46A] hover:text-white"
  }`}
>
    {category}
      </button>
    ))}

        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {filteredPhotos.map((photo, index) => (

       <div
      key={index}
      onClick={() => setSelectedPhotoIndex(index)}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg cursor-pointer"
        >

      <Image
        src={photo.src}
        alt={`Galerie ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover hover:scale-105 transition-all duration-500"
      />

    </div>

  ))}

</div>
      </div>
      {selectedPhotoIndex !== null && (
  <div
    onClick={() => setSelectedPhotoIndex(null)}
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
  >
    <img
  src={filteredPhotos[selectedPhotoIndex].src}
  alt={filteredPhotos[selectedPhotoIndex].title}
  className="max-w-full max-h-full rounded-2xl"
/>
<button
  onClick={(e) => {
    e.stopPropagation();
    setSelectedPhotoIndex(
      selectedPhotoIndex === 0
        ? filteredPhotos.length - 1
        : selectedPhotoIndex - 1
    );
  }}
  className="absolute left-6 top-1/2 -translate-y-1/2 z-20
w-10 h-10 md:w-16 md:h-16
rounded-full
bg-[#10261D]/80
backdrop-blur-md
border border-[#C6A46A]/50
text-[#F4E8C7]
text-lg md:text-2xl
font-bold
flex items-center justify-center
hover:bg-[#C6A46A]
hover:text-white
hover:scale-110
transition-all duration-300"
>
 ‹
</button>

<button
  onClick={(e) => {
    e.stopPropagation();
    setSelectedPhotoIndex(
      selectedPhotoIndex === filteredPhotos.length - 1
        ? 0
        : selectedPhotoIndex + 1
    );
  }}
 className="absolute right-6 top-1/2 -translate-y-1/2 z-20
w-10 h-10 md:w-16 md:h-16
rounded-full
bg-[#10261D]/80
backdrop-blur-md
border border-[#C6A46A]/50
text-[#F4E8C7]
text-lg md:text-2xl
font-bold
flex items-center justify-center
hover:bg-[#C6A46A]
hover:text-white
hover:scale-110
transition-all duration-300"
>
  ›
</button>

<p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl font-title">
  {filteredPhotos[selectedPhotoIndex].title}
</p>
    <button
  onClick={() => setSelectedPhotoIndex(null)}
  className="absolute top-4 right-4 md:top-6 md:right-6 z-20
  w-10 h-10 md:w-16 md:h-16
  rounded-full
  bg-[#10261D]/80
  backdrop-blur-md
  border border-[#C6A46A]/50
  text-[#F4E8C7]
  text-xl md:text-2xl
  font-bold
  flex items-center justify-center
  hover:bg-red-600
  hover:border-red-500
  hover:text-white
  hover:scale-110
  transition-all duration-300"
>
  ×
</button>
  </div>
)}
    </section>
  );
}