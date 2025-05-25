import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full max-w-6xl text-center text-sm text-gray-400 mt-20">
        <p className="mb-4">
          آیا سوالی دارید؟{" "}
          <Link
            href="https://t.me/schaayesteh"
            target="_blank"
            className="underline hover:text-black"
          >
            تلگرام ما
          </Link>
        </p>
        <p>© {new Date().getFullYear()} Baan Growth Agency</p>
      </footer>
    )
}