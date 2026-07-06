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

  const updateFilters = (newFilters: Partial<CampersFilters>) => {
    console.log("updateFilters called with:", newFilters);
    const merged: CampersFilters = { ...filters, ...newFilters };
    console.log("merged:", merged);
    const params = new URLSearchParams();

    if (merged.location) params.append("location", merged.location);
    if (merged.form) params.append("form", merged.form);
    if (merged.transmission) params.append("transmission", merged.transmission);
    if (merged.engine) params.append("engine", merged.engine);

    const query = params.toString();
    console.log("final query:", query, "pushing to:", query ? `${pathname}?${query}` : pathname);
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return { filters, updateFilters };
};