"use client";

import VantaBg from "./components/vanta-bg";
import Header from "./components/header";
import Hero from "./components/hero";
import ClientsCarousel from "./components/clientsCarousel";
import Services from "./components/services";
import Reviews from "./components/reviews";
import ContactForm from "./components/contactForm";
import Team from "./components/team";
import Footer from "./components/footer";



export default function Home() {
 
  return (
    <div
      dir="rtl"
      className="relative min-h-screen bg-white text-black font-sans px-4 sm:px-12 py-10 flex flex-col items-center gap-32"
    >
      <VantaBg/>
      <Header/>
      <Hero/>     
      <ClientsCarousel/>
      <Services/>
      <Reviews/>
      <ContactForm/>
      <Team/>
      <Footer/>
    </div>
  );
}
