"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroImage from "./assets/marketingHeroImage.png";
import shargh from "./assets/sharghDaily.jpg";
import etemad from "./assets/etemadOnline.png";
import hammihan from "./assets/Hammihan.png";
import bookcity from "./assets/bookcity.png";
import karzar from "./assets/karzarLogo.jpg";
import spiral from "./assets/spiral.png";
import seo from "./assets/seo.png";
import reportage from "./assets/reportage.jpg";
import socialStrategy from "./assets/social-media.jpg";
import sha from "./assets/characters/sha-char.png";
import hossein from "./assets/characters/ho-char.png";
import zahra from "./assets/characters/zar-char.png";
import ida from "./assets/characters/ida-char.png";
import sina from "./assets/characters/sina-char.png";

type VantaEffect = {
  destroy: () => void;
};

const clients = [
  { id: 1, name: "شرق", src: shargh },
  { id: 2, name: "شهرکتاب‌آنلاین", src: bookcity },
  { id: 3, name: "اعتمادآنلاین", src: etemad },
  { id: 4, name: "کارزار", src: karzar },
  { id: 5, name: "هم‌میهن‌آنلاین", src: hammihan },
  { id: 6, name: "اسپیرال", src: spiral },
];

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!vantaEffect) {
      Promise.all([
        import("three"),
        import("vanta/dist/vanta.net.min.js"),
      ]).then(([THREE, VANTA]) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2626c8,
          backgroundColor: 0xf0f0f0,
          maxDistance: 18.0,
          spacing: 16.0,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      dir="rtl"
      className="relative min-h-screen bg-white text-black font-sans px-4 sm:px-12 py-10 flex flex-col items-center gap-32"
    >
      {/* Vanta Background Layer */}
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-[800px] -z-10"
      ></div>

      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center z-10 relative">
        <h1 className="text-2xl font-bold">بان</h1>
        <nav className="flex gap-6 text-sm sm:text-base">
          <Link href="#clients">مشتریان</Link>
          <Link href="#services">خدمات</Link>
          <Link href="#team">درباره ما</Link>
          <Link href="#contact">تماس</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full max-w-6xl flex flex-col-reverse sm:flex-row items-center gap-12 rounded-xl p-10 relative overflow-hidden"
        style={{ minHeight: "500px" }}
      >
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-right gap-6">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-snug">
            ما برند شما را <span className="text-blue-700">تبدیل به ستاره</span>{" "}
            بازار می‌کنیم.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
            آژانس مارکتینگ بان با بهره‌گیری از خلاقیت، طراحی و داده، مسیر رشد
            برند شما را هموار می‌کند.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition">
              <Link href="#contact">شروع همکاری</Link>
            </button>
            <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
              <Link href="#services">مشاهده خدمات</Link>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={heroImage}
            width={600}
            height={400}
            alt="hero image"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="w-full bg-gray-50 py-12 mt-40">
        <div className="max-w-6xl mx-auto overflow-hidden relative">
          <div className="animate-marquee flex gap-24 items-center">
            {clients.map((client) => (
              <Image
                key={client.id}
                src={client.src}
                width={180}
                height={100}
                alt={`client ${client.name}`}
                className="object-contain grayscale opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
            width: max-content;
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </section>

      {/* Services */}
      <section
        id="services"
        className="w-full max-w-6xl flex flex-col items-center gap-12"
      >
        <h3 className="text-3xl font-bold">خدمات ما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "سئو",
              desc: "افزایش دیده‌شدن برند شما در گوگل.",
              img: seo,
            },
            {
              title: "استراتژی محتوا",
              desc: "برنامه‌ریزی و تولید محتوای هدفمند برای رشد.",
              img: socialStrategy,
            },
            {
              title: "رپورتاژ رسانه‌ای",
              desc: "انتشار نام شما در رسانه‌های معتبر.",
              img: reportage,
            },
          ].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="rounded-xl shadow-md p-4 border flex flex-col gap-4 hover:shadow-xl transition"
            >
              <Image
                src={img}
                alt={title}
                width={400}
                height={200}
                className="rounded-md object-cover w-full h-48"
              />
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-12">
        <h3 className="text-3xl font-bold">نظرات مشتریان</h3>
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {[
              {
                name: "علیرضا محمدی",
                role: "مدیر بازاریابی",
                company: "دیجی‌کالا",
                text: "بان کمک زیادی به رشد برند ما کرد.",
              },
              {
                name: "سحر رضایی",
                role: "مدیر محتوا",
                company: "زرین‌پال",
                text: "همکاری با تیم بان تجربه‌ای عالی بود.",
              },
              {
                name: "کامیار توسلی",
                role: "مدیر دیجیتال مارکتینگ",
                company: "اسنپ",
                text: "خدمات بان فراتر از انتظار ما بود.",
              },
            ].map(({ name, role, company, text }, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4">“{text}”</p>
                  <div className="text-sm text-gray-500">
                    {name} - {role} در {company}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="w-full max-w-4xl flex flex-col items-center gap-6"
      >
        <h3 className="text-3xl font-bold">شروع همکاری</h3>
        <p className="text-gray-600 text-center">
          فرم زیر را پر کنید تا با شما تماس بگیریم.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfR9eLz4-FLO4_nYRC78vNCDQgCn14EHRCDUCuY2g_PZjKSpQ/viewform?embedded=true"
          width="100%"
          height="600"
          className="rounded-xl border"
          loading="lazy"
        ></iframe>
      </section>

      {/* Team */}
      <section
        id="team"
        className="w-full max-w-6xl flex flex-col items-center gap-12"
      >
        <h3 className="text-3xl font-bold">تیم ما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {[
            { name: "حسین", role: "استراتژیست رشد کسب‌وکار", src: hossein },
            { name: "شایسته", role: "توسعه‌دهنده وبسایت", src: sha },
            { name: "آیدا", role: "کارشناس سئو و خبرنگار", src: ida },
            { name: "سینا", role: "استراتژیست شبکه‌های اجتماعی", src: sina },
            { name: "زهرا", role: "نویسنده محتوا", src: zahra },
          ].map((teammate, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                <Image src={teammate.src} alt={teammate.name} />
              </div>
              <h4 className="text-lg font-semibold">{teammate.name}</h4>
              <p className="text-sm text-gray-600">{teammate.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-sm text-gray-400 mt-20">
        <p className="mb-4">
          آیا سوالی دارید؟{" "}
          <Link
            href="mailto:hello@baan.agency"
            className="underline hover:text-black"
          >
            hello@baan.agency
          </Link>
        </p>
        <p>© {new Date().getFullYear()} Baan Marketing Agency</p>
      </footer>
    </div>
  );
}
