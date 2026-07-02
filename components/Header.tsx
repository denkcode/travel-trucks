"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="border-b gap-[450px] border-[var(--badges)] px-16 py-6 w-[1440px] h-[72px] flex items-center text-[var(--main)]">
      <Link className="" href="/" aria-label="Home">
        <svg width="136" height="16">
          <use href="/sprite.svg#logo"></use>
        </svg>
      </Link>
      <nav aria-label="Navigation">
        <ul className="flex justify-between items-center gap-8">
          <li>
            <Link
              href="/"
              className={`font-medium text-base leading-6 text-center ${
                pathname === "/"
                  ? "text-[var(--grey-green)]"
                  : "text-[var(--main)]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`font-medium text-base leading-6 text-center ${
                pathname === "/catalog"
                  ? "text-[var(--grey-green)]"
                  : "text-[var(--main)]"
              }`}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
