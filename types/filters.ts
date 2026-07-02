export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type CamperTransmission = "automatic" | "manual";

export type CamperEngine =
  | "diesel"
  | "petrol"
  | "hybrid"
  | "electric";

export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export type CampersFilters = {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
};