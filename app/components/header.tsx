import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full max-w-6xl flex justify-between items-center z-10 relative">
        <h1 className="text-2xl font-bold">بان</h1>
        <nav className="flex gap-6 text-sm sm:text-base">
          <Link href="#clients">مشتریان</Link>
          <Link href="#services">خدمات</Link>
          <Link href="#team">درباره ما</Link>
          <Link href="#contact">تماس</Link>
        </nav>
      </header>
    )
}