"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex h-[72px] w-full items-center border-b border-[var(--badges)] px-16 text-[var(--main)]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center px-16">
        <Link className="" href="/" aria-label="Home">
          <svg width="136" height="16">
            <use href="/sprite.svg#logo"></use>
          </svg>
        </Link>
        <nav className="mx-auto" aria-label="Navigation">
          <ul className="flex justify-between items-center gap-8">
            <li>
              <Link
                href="/"
                className={`font-medium text-base leading-6 text-center transition-colors hover:text-[var(--grey-green)] ${
                  pathname.startsWith("/catalog")
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
                className={`font-medium text-base leading-6 text-center transition-colors hover:text-[var(--grey-green)] ${
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
      </div>
    </header>
  );
};
export default Header;
