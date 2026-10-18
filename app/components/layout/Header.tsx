"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { title: "L'expérience", href: "#adventure" },
  { title: "Les séjours", href: "#stays" },
  { title: "Nos Horizons", href: "#horizons" },
  { title: "Galerie", href: "#gallery" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-[999] transition-all duration-500">
      <div className="mx-auto max-w-[1600px] px-8">
        <div
  className={`flex items-center justify-between h-22 rounded-[24px] px-4 transition-all duration-500 ${
          scrolled
            ? "bg-[#10261D]/70 backdrop-blur-xl shadow-2xl border border-[#3E5648]"
            : "bg-transparent"
        }`}>
          <a href="#top">
            <Image
              src="/logo.png"
              alt="Lappi Wild"
              width={140}
              height={68}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-20">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`group relative text-base uppercase tracking-[0.18em] transition-colors duration-300 ${
                  scrolled ? "text-[#F4E8C7]" : "text-white"
                } hover:text-[#C6A46A]`}
              >
                {item.title}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C6A46A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

           <Link
  href="/contact"
  className={`rounded-full px-10 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
    scrolled
      ? "bg-[#C6A46A] text-white hover:bg-[#B7924D]"
      : "border border-white text-white hover:bg-white hover:text-[#1F1F1F]"
  }`}
>
  Demander un séjour
</Link>
        </div>
      </div>
    </header>
  );
}
