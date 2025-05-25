import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Reviews(){
    return(
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
    )
}