"use client"
import { useInfiniteQuery } from '@tanstack/react-query'
import { getCampers } from '@/services/campersApi'
import type {  CampersFilters } from '@/types'

export const useCampersInfinite = (filters: CampersFilters) => {
  return useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) => getCampers(filters, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined,
  });
};