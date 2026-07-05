"use client";

import { useState } from "react";
import { useCatalogFilters } from "@/features/catalog/hooks/useCatalogFilters";
import {
  FORM_OPTIONS,
  TRANSMISSION_OPTIONS,
  ENGINE_OPTIONS,
} from "@/constans/filterOption";
import type { CampersFilters } from "@/types";

export default function CamperFilters() {
  const { filters, updateFilters } = useCatalogFilters();
  const [localFilters, setLocalFilters] = useState<CampersFilters>(filters);

  return (
    <div className="flex flex-col rounded-[20px] w-[360px] h-[840px] bg-[var(--inputs)] p-[24px]">
      <div>
        <div className="gap-2 flex flex-col mb-[40px]">
          <label className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--gray)]">
            Location
          </label>
          <div className="flex h-[56px] w-[312px] items-center gap-2 rounded-xl bg-[var(--white)] px-5">
            <svg width="18" height="18" className="shrink-0 text-[var(--main)]">
              <use href="/sprite.svg#icon-map" />
            </svg>
            <input
              type="text"
              className="h-full min-w-0 flex-1 bg-transparent text-base font-normal leading-[150%] text-[var(--main)] outline-none placeholder:text-[var(--gray)]"
              placeholder="City"
              value={localFilters.location ?? ""}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, location: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5 mb-2">
          <p className="font-[var(--font-family)] text-xl font-semibold leading-[120%] text-[var(--main)]">
            Filters
          </p>
          <p className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--gray)]">
            Camper form
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          {FORM_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-4 cursor-pointer"
            >
              <input
                type="radio"
                name="form"
                className="sr-only"
                checked={localFilters.form === option.value}
                onChange={() =>
                  setLocalFilters({ ...localFilters, form: option.value })
                }
              />

              <div className="w-6 h-6 rounded-full border border-[#475467] flex items-center justify-center">
                {localFilters.form === option.value && (
                  <div className="w-3 h-3 rounded-full bg-[#475467]" />
                )}
              </div>

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--gray)]">
          Engine
        </p>
        <div className="flex flex-col gap-2 mb-5">
          {ENGINE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-4 cursor-pointer"
            >
              <input
                type="radio"
                name="engine"
                className="sr-only"
                checked={localFilters.engine === option.value}
                onChange={() =>
                  setLocalFilters({ ...localFilters, engine: option.value })
                }
              />

              <div className="w-6 h-6 rounded-full border border-[#475467] flex items-center justify-center">
                {localFilters.engine === option.value && (
                  <div className="w-3 h-3 rounded-full bg-[#475467]" />
                )}
              </div>

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-[var(--font-family)] font-normal text-base leading-[150%] text-[var(--gray)]">
          Transmission
        </p>
        <div className="flex flex-col gap-2 mb-1 mb-[48px]">
          {TRANSMISSION_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-4 cursor-pointer"
            >
              <input
                type="radio"
                name="transmission"
                className="sr-only"
                checked={localFilters.transmission === option.value}
                onChange={() =>
                  setLocalFilters({
                    ...localFilters,
                    transmission: option.value,
                  })
                }
              />

              <div className="w-6 h-6 rounded-full border border-[#475467] flex items-center justify-center">
                {localFilters.transmission === option.value && (
                  <div className="w-3 h-3 rounded-full bg-[#475467]" />
                )}
              </div>

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4 w-[312px] h-[56px] rounded-[200px] bg-[var(--grey-green)] transition-colors hover:bg-[var(--green-hover)] flex items-center justify-center">
        <button
          className="w-full h-full text-[var(--white)]"
          onClick={() => updateFilters(localFilters)}
        >
          Search
        </button>
      </div>
      <div className="mb-2 w-[312px] h-[56px] rounded-[200px] bg-[var(--white)] flex items-center justify-center border border-[var(--gray-light)] transition-colors hover:border-[var(--grey-green)]">
        <button
         className="w-full h-full flex items-center justify-center gap-2 text-[var(--main)] font-medium"
          onClick={() => {
            const cleared: CampersFilters = {};
            setLocalFilters(cleared);
            updateFilters({
              location: undefined,
              form: undefined,
              transmission: undefined,
              engine: undefined,
            });
          }}
        >
          <svg className="w-5 h-5">
            <use href="/sprite.svg#icon-close" />
          </svg>
          <span>Clear filters</span>
        </button>
      </div>
    </div>
  );
}
