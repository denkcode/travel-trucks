import { AMENITY_OPTIONS } from "@/constans/filterOption";
import { getCamperLabels } from "@/constans/label";
import type { CamperDetails } from "@/types";

type CamperInfoProps = {
  camper: CamperDetails;
};

const detailRows = [
  ["Form", "form"],
  ["Length", "length"],
  ["Width", "width"],
  ["Height", "height"],
  ["Tank", "tank"],
  ["Consumption", "consumption"],
] as const;

export default function CamperInfo({ camper }: CamperInfoProps) {
  const { engineLabel, transmissionLabel, formLabel } = getCamperLabels(camper);
  const amenityLabels = camper.amenities.map(
    (amenity) =>
      AMENITY_OPTIONS.find((option) => option.value === amenity)?.label ??
      amenity,
  );

  const detailValues: Record<string, string> = {
    form: formLabel ?? "",
    length: camper.length,
    width: camper.width,
    height: camper.height,
    tank: camper.tank,
    consumption: camper.consumption,
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-2xl bg-[var(--inputs)] p-6">
        <div className="mb-3 flex items-start justify-between gap-6">
          <div>
            <h1 className="mb-2 text-2xl font-semibold leading-[133%] text-[var(--main)]">
              {camper.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[var(--main)]">
              <span className="flex items-center gap-1">
                <svg width="15" height="14" className="text-[var(--rating)]">
                  <use href="/sprite.svg#icon-star" />
                </svg>
                {camper.rating}({camper.totalReviews} Reviews)
              </span>
              <span className="flex items-center gap-1">
                <svg width="16" height="16" className="text-[var(--main)]">
                  <use href="/sprite.svg#icon-map" />
                </svg>
                {camper.location}
              </span>
            </div>
          </div>
          <p className="text-2xl font-semibold text-[var(--main)]">
            €{camper.price}
          </p>
        </div>

        <p className="text-sm leading-[150%] text-[var(--text)]">
          {camper.description}
        </p>
      </section>

      <section className="rounded-2xl bg-[var(--inputs)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--main)]">
          Vehicle details
        </h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {[transmissionLabel, engineLabel, formLabel, ...amenityLabels].map(
            (label) => (
              <span
                key={label}
                className="rounded-[100px] bg-[var(--badges)] px-4 py-3 text-sm font-medium text-[var(--main)]"
              >
                {label}
              </span>
            ),
          )}
        </div>

        <dl className="flex flex-col gap-3 text-sm text-[var(--main)]">
          {detailRows.map(([label, key]) => (
            <div key={key} className="flex justify-between gap-6">
              <dt>{label}</dt>
              <dd className="text-right">{detailValues[key]}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}