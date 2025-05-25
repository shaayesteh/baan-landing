import Image from "next/image";
import sha from "../assets/characters/sha-char.png";
import hossein from "../assets/characters/ho-char.png";
import zahra from "../assets/characters/zar-char.png";
import ida from "../assets/characters/ida-char.png";
import sina from "../assets/characters/sina-char.png";

export default function Team(){
    return(
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
    )
}