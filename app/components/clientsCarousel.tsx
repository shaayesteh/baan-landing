import Image from "next/image";
import shargh from "../assets/sharghDaily.jpg";
import etemad from "../assets/etemadOnline.png";
import hammihan from "../assets/Hammihan.png";
import bookcity from "../assets/bookcity.png";
import karzar from "../assets/karzarLogo.jpg";
import spiral from "../assets/spiral.png";
import taadol from '../assets/taadol-logo.jpg'

const clients = [
  {id:7, name:'روزنامه تعادل', src:taadol},
  { id: 3, name: "اعتمادآنلاین", src: etemad },
  { id: 2, name: "شهرکتاب‌آنلاین", src: bookcity },
  { id: 4, name: "کارزار", src: karzar },
  { id: 5, name: "هم‌میهن‌آنلاین", src: hammihan },
  { id: 6, name: "اسپیرال", src: spiral },
  { id: 1, name: "شرق", src: shargh },
  ];

export default function ClientsCarousel(){
return(
    <section id="clients" className="w-full bg-gray-50 py-12 md:mt-40">
    <div className="max-w-6xl mx-auto overflow-hidden relative">
      <div className="animate-marquee flex gap-24 items-center ">
        {clients.map((client) => (
          <Image
            key={client.id}
            src={client.src}
            width={180}
            height={100}
            alt={`client ${client.name}`}
            className="object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition rounded-lg"
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
)
}