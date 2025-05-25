import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import seo from "../assets/seo.png";
import reportage from "../assets/reportage.jpg";
import socialStrategy from "../assets/social-media.jpg";


export default function Services(){
    return(
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
    )
}