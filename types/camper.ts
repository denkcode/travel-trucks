import type { CamperForm, CamperTransmission, CamperEngine, Amenity } from "./filters";

export type GalleryImage = {
    id: string,
    camperId: string,
    thumb: string,
    original: string,
    order: number,
}

export type CamperListItem = {
    id: string,
    description: string,
    name: string,
    price: number,
    rating: number,
    location: string,
    form: CamperForm,
    length: string,
    width: string,
    height: string,
    tank: string,
    consumption: string,
    transmission: CamperTransmission,
    engine: CamperEngine,
    amenities: Amenity[],
    coverImage: string,
    totalReviews: number

}

export type CamperDetails = CamperListItem & {
  gallery: GalleryImage[],
  createdAt: string,
  updatedAt: string
};