import { CamperListItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getCamperLabels } from "@/constans/label";
export const CamperCard = ({ camper }: { camper: CamperListItem }) => {
  const { engineLabel, transmissionLabel, formLabel } = getCamperLabels(camper);

  return (
    <article className="flex p-[24px] flex-row gap-6 rounded-2xl w-[888px] bg-[var(--inputs)]">
      <div className="w-[219px] h-[240px] overflow-hidden rounded-[10px]">
        <Image
          src={camper.coverImage}
          alt={camper.name}
          width={219}
          height={240}
          className="block w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col min-h-[264px] w-[524px]">
        <div className="flex flex-row gap-5 mb-2">
          <h3 className="font-[var(--font-family)] font-semibold text-2xl leading-[133%] text-[var(--main)]">
            {camper.name}
          </h3>
          <span className="font-[var(--font-family)] font-semibold text-2xl leading-[133%] text-[var(--main)]">
            €{camper.price}
          </span>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-1">
            <svg className="text-yellow-400" width="15" height="14">
              <use href="/sprite.svg#icon-star" />
            </svg>
            <span className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--main)]">
              {camper.rating}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500">
              <use href="/sprite.svg#icon-map" />
            </svg>
            <span className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--main)]">
              {camper.location}
            </span>
          </div>
        </div>
        <div className="mb-5">
          <p className="line-clamp-3 font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--text)]">
            {camper.description}
          </p>
        </div>
        <div className="mb-5 flex flex-row gap-2">
          <div className="flex justify-center items-center gap-2 mix-blend-multiply rounded-[100px] w-[109px] h-[48px] bg-[var(--badges)]">
            <svg className="" width="20" height="20">
              <use href="/sprite.svg#icon-building" />
            </svg>
            <p className="font-[var(--font-family)] font-medium text-base leading-[150%] text-center text-[var(--main)]">
              {engineLabel}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mix-blend-multiply rounded-[100px] w-[143px] h-[48px] bg-[var(--badges)]">
            <svg width="20" height="15">
              <use href="/sprite.svg#icon-diagram" />
            </svg>
            <p className="font-[var(--font-family)] font-medium text-base leading-[150%] text-center text-[var(--main)]">
              {transmissionLabel}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mix-blend-multiply rounded-[100px] min-w-[109px] h-[48px] px-4 bg-[var(--badges)] whitespace-nowrap">
            <svg width="15" height="13">
              <use href="/sprite.svg#icon-car" />
            </svg>
            <p className="font-[var(--font-family)] font-medium text-base leading-[150%] text-center text-[var(--main)]">
              {formLabel}
            </p>
          </div>
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`/catalog/${camper.id}`}
          className="mt-auto inline-flex w-[173px] h-[56px] items-center justify-center rounded-[200px] bg-[var(--grey-green)] font-medium text-base tracking-[-0.01em] text-[var(--white)] transition-colors hover:bg-[var(--green-hover)]"
        >
          Show More
        </Link>
      </div>
    </article>
  );
};
