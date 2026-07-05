import { CamperListItem } from "@/types" 
import { CamperCard } from "./CamperCard"
type Props = { campers: CamperListItem[] }

export const CamperCardList = ({ campers }: Props) => {
    return (
        <div className="flex flex-col gap-6">
          {campers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
    )
}