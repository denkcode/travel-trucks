"use client";
import { useRouter, usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import type { CampersFilters } from "@/types";

export const useCatalogFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const location = searchParams.get("location") ?? undefined;
  const form = (searchParams.get("form") ??
    undefined) as CampersFilters["form"];
  const transmission = (searchParams.get("transmission") ??
    undefined) as CampersFilters["transmission"];
  const engine = (searchParams.get("engine") ??
    undefined) as CampersFilters["engine"];

  const filters: CampersFilters = {
    location,
    form,
    transmission,
    engine,
  };

  const updateFilters = (
  newFilters: Partial<CampersFilters>,
) => {
  const merged: CampersFilters = { ...filters, ...newFilters };
  const params = new URLSearchParams();
  if (merged.location !== undefined) params.append("location", merged.location);
  if (merged.form !== undefined) params.append("form", merged.form);
  if (merged.transmission !== undefined)
    params.append("transmission", merged.transmission);
  if (merged.engine !== undefined) params.append("engine", merged.engine);
  router.push(`${pathname}?${params.toString()}`);
};

  return {filters, updateFilters};
};

