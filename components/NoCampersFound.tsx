import Image from "next/image";

type NoCampersFoundProps = {
  onClearFilters: () => void;
};

export default function NoCampersFound({
  onClearFilters,
}: NoCampersFoundProps) {
  return (
    <section className="flex min-h-[720px] flex-1 flex-col items-center justify-center rounded-[20px] bg-[var(--inputs)] px-10 text-center">
      <Image
        src="/images/notfound.webp"
        alt="Illustration of no campers found"
        width={320}
        height={220}
        className="mb-10"
      />

      <h2 className="mb-4 text-3xl font-semibold text-[var(--main)]">
        No campers found
      </h2>
      <p className="mb-10 max-w-[540px] text-xl leading-[150%] text-[var(--main)]">
        We could not find any campers that match your filters. Try adjusting
        your search or clearing some filters.
      </p>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onClearFilters}
          className="flex h-14 min-w-[190px] items-center justify-center gap-3 rounded-[200px] border border-[var(--gray-light)] bg-[var(--white)] px-8 text-base font-medium text-[var(--main)] transition-colors hover:border-[var(--grey-green)]"
        >
          <svg width="20" height="20">
            <use href="/sprite.svg#icon-close" />
          </svg>
          Clear filters
        </button>
        <button
          type="button"
          onClick={onClearFilters}
          className="h-14 min-w-[190px] rounded-[200px] bg-[var(--grey-green)] px-8 text-base font-medium text-[var(--white)] transition-colors hover:bg-[var(--green-hover)]"
        >
          View all campers
        </button>
      </div>
    </section>
  );
}
