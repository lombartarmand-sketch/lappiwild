import Image from "next/image";
import { ReactNode } from "react";

type ActivityProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  badges: string[];
  children: ReactNode;
};

export default function Activity({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = "left",
  badges,
  children,
}: ActivityProps) {
  const imageLeft = imagePosition === "left";

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Mobile */}
      <div className="lg:hidden">
        <span className="text-sm uppercase tracking-[0.3em] text-[#8B6B3F]">
          {subtitle}
        </span>

        <h2 className="mt-4 font-serif text-4xl text-[#1C2A22]">
          {title}
        </h2>

        <div className="mt-8 overflow-hidden rounded-[30px] shadow-lg">
          <Image
            src={image}
            alt={imageAlt}
            width={900}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-8 text-lg leading-8 text-[#5E665F]">
          {children}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-[#EFE7DA] px-5 py-2 text-sm text-[#5E665F]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center gap-16">
        {imageLeft && (
          <div className="overflow-hidden rounded-[30px] shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={700}
              className="w-full h-auto object-cover transition duration-700 hover:scale-105"
            />
          </div>
        )}

        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-[#8B6B3F]">
            {subtitle}
          </span>

          <h2 className="mt-5 font-serif text-4xl text-[#1C2A22]">
            {title}
          </h2>

          <div className="mt-8 text-lg leading-8 text-[#5E665F]">
            {children}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-[#EFE7DA] px-5 py-2 text-sm text-[#5E665F]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {!imageLeft && (
          <div className="overflow-hidden rounded-[30px] shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={700}
              className="w-full h-auto object-cover transition duration-700 hover:scale-105"
            />
          </div>
        )}
      </div>
    </section>
  );
}