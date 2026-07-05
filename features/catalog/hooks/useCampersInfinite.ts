"use client"
import { useInfiniteQuery } from '@tanstack/react-query'
import { getCampers } from '@/services/campersApi'
import type { CamperListResponse, CampersFilters } from '@/types'

export const useCampersInfinite = (filters: CampersFilters) => {

    const query = useInfiniteQuery<CamperListResponse, Error, CamperListResponse, (string | CampersFilters)[]>({
        queryKey: ["campers", filters],
        queryFn: ({ pageParam = 1 }) => getCampers(filters, pageParam as number),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        

    })
    return query
}