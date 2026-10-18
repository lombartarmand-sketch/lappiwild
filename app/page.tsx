import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Adventure from "./components/sections/Adventure";

import Footer from "./components/layout/Footer";
import StaySection from "./components/sections/StaySection";
import HorizonsSection from "./components/sections/HorizonsSection";
import GallerySection from "./components/sections/GallerySection";
export default function Home() {
  return (
  <>
    <Header />
    <Hero />
    <Adventure />

    <StaySection />
    <HorizonsSection />
    <GallerySection />

    <Footer />
  </>
);
}