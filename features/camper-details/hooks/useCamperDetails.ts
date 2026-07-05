"use client"
import { useQuery } from '@tanstack/react-query'
import { getCamperById } from '@/services/campersApi'
import type { CamperDetails } from "@/types"

export const useCamperDetails = (camperId: string) => {
    return useQuery<CamperDetails>({
        queryKey: ['camper', camperId],
        queryFn: () => getCamperById(camperId),
    })
}
