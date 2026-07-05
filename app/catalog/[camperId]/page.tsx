"use client";

import { useParams } from "next/navigation";
import { useCamperDetails } from "@/hooks/useCamperDetails";
import { useCamperReviews } from "@/hooks/useCamperReviews";
import Loading from "@/components/Loading";
import Gallery from "@/components/Gallery";
import CamperInfo from "@/components/CamperInfo";
import ReviewsList from "@/components/ReviewsList";
import BookingForm from "@/components/BookingForm";

const CamperDetails = () => {
  const params = useParams();
  const camperId = params.camperId as string;
  const { data: camper, isLoading, isError } = useCamperDetails(camperId);
  const { data: reviews = [] } = useCamperReviews(camperId);

  if (isLoading) {
    return (
      <Loading
        text="Loading camper..."
        subtext="Please wait while we fetch camper details"
      />
    );
  }

  if (isError || !camper) {
    return <div className="p-4">Unable to load camper.</div>;
  }

  return (
    <main className="px-16 py-12">
      <div className="mx-auto max-w-[1200px]">
        <section className="mb-16 grid grid-cols-[560px_1fr] gap-8">
          <Gallery images={camper.gallery} />
          <CamperInfo camper={camper} />
        </section>

        <section className="grid grid-cols-2 gap-8">
          <ReviewsList reviews={reviews} />
          <div className="pt-[52px]">
            <BookingForm camperId={camperId} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CamperDetails;
