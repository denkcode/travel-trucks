import { ENGINE_OPTIONS, TRANSMISSION_OPTIONS, FORM_OPTIONS } from "./filterOption";
import { CamperListItem } from "@/types";

export const getCamperLabels = (camper: CamperListItem) => ({
  engineLabel: ENGINE_OPTIONS.find((o) => o.value === camper.engine)?.label,
  transmissionLabel: TRANSMISSION_OPTIONS.find((o) => o.value === camper.transmission)?.label,
  formLabel: FORM_OPTIONS.find((o) => o.value === camper.form)?.label,
});