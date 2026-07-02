import Link from "next/link";

export const HeroBanner = () => {
  return (
    <section className="h-screen w-full bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/hero.webp')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-3xl pt-[195px] pl-16 text-white">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-[var(--font-family)] font-semibold text-5xl leading-[67%] text-[var(--inputs)]">
              Campers of your dreams
            </h1>

            <p className="font-semibold text-2xl leading-[133%] text-[var(--inputs)]">
              You can find everything you want in our catalog
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex h-14 w-[173px] items-center justify-center whitespace-nowrap rounded-full bg-[var(--grey-green)] px-[60px] py-4 font-[var(--font-family)] text-base font-medium leading-6 tracking-[-0.01em] text-[var(--white)]"
          >
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;