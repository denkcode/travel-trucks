import type { CamperForm, CamperTransmission, CamperEngine, Amenity } from "@/types";

export const TRANSMISSION_OPTIONS: Array<{ value: CamperTransmission; label: string }> = [
  {
    value: "automatic", label: "Automatic"
  },
  {
    value: "manual", label: "Manual"
  }
]

export const FORM_OPTIONS: Array<{value: CamperForm; label: string }> = [
    {
        value: "alcove", label: "Alcove"
    },
    {
        value: "panel_van", label: "Panel Van"
    },
    {
        value: "integrated", label: "Integrated"
    },
    {
        value: "semi_integrated", label: "Semi Integrated"
    },
]

export const ENGINE_OPTIONS: Array<{value: CamperEngine; label: string }> = [
    {
        value: "diesel", label: "Diesel"
    },
    {
        value: "petrol", label: "Petrol"
    },
    {
        value: "hybrid", label: "Hybrid"
    },
    {
        value: "electric", label: "Electric"
    },
]

export const AMENITY_OPTIONS: Array<{value: Amenity; label: string }> = [
    {
        value: "ac", label: "AC"
    },
    {
        value: "bathroom", label: "Bathroom"
    },
    {
        value: "kitchen", label: "Kitchen"
    },
    {
        value: "tv", label: "TV"
    },
    {
        value: "radio", label: "Radio"
    },
    {
        value: "refrigerator", label: "Refrigerator"
    },
    {
        value: "microwave", label: "Microwave"
    },
    {
        value: "gas", label: "Gas"
    },
    {
        value: "water", label: "Water"
    },
]