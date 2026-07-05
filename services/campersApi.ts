import type { CampersFilters, CamperListResponse, CamperDetails, Review, BookingRequestDto, BookingRequestResponse} from "@/types";

const BASE_URL = "https://campers-api.goit.study";

export const getCampers = async (filters: CampersFilters, page: number): Promise<CamperListResponse> => {
    const searchParams = new URLSearchParams();
    searchParams.append("page", String(page));
    searchParams.append("perPage", "4");

    if (filters.location !== undefined) {
        searchParams.append("location", String(filters.location));
    }
    if (filters.form !== undefined) {
        searchParams.append("form", String(filters.form));

    }
    if (filters.transmission !== undefined) {
        searchParams.append("transmission", String(filters.transmission))

    }
    if (filters.engine !== undefined) {
        searchParams.append("engine", String(filters.engine))
    }

    const url = `${BASE_URL}/campers?${searchParams.toString()}`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Failed to fetch campers: ${response.status}`)
    }

    return await response.json() as CamperListResponse
}



export const getCamperById = async (camperId: string): Promise<CamperDetails> => {
    

    const url = `${BASE_URL}/campers/${camperId}`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Failed to fetch camper details: ${response.status}`)
    }

    return await response.json() as CamperDetails
}

export const getCamperReviews = async (camperId: string): Promise<Review[]> => {
    

    const url = `${BASE_URL}/campers/${camperId}/reviews`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Failed to fetch reviews: ${response.status}`)
    }

    return await response.json() as Review[]
}

export const createBookingRequest = async (camperId: string, data: BookingRequestDto): Promise<BookingRequestResponse> => {
     const url = `${BASE_URL}/campers/${camperId}/booking-requests`
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

     if (!response.ok) {
        throw new Error(`Failed to create booking request: ${response.status}`)
    }
    
    return await response.json() as BookingRequestResponse
}