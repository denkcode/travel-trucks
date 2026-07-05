"use client"
import { useQuery } from '@tanstack/react-query'
import { getCamperReviews } from '@/services/campersApi'
import type { Review } from '@/types'

export const useCamperReviews = (camperId: string) => {
    return useQuery<Review[]>({
            queryKey: ['camperReviews', camperId],
            queryFn: () => getCamperReviews(camperId),
        })
}