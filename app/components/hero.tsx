import Link from "next/link";
// import Image from "next/image";
// import heroImage from '../assets/marketingHeroImage.png'

export default function Hero(){
    return(
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
                {/* <div className="flex-1">
                  <Image
                    src={heroImage}
                    width={600}
                    height={400}
                    alt="hero image"
                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                  />
                </div> */}
              </section>
    )
}