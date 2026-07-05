import type { Review } from "@/types";
import ReviewItem from "./ReviewItem";

type ReviewsListProps = {
  reviews: Review[];
};

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (reviews.length === 0) {
    return (
      <section>
        <h2 className="mb-6 text-xl font-semibold text-[var(--main)]">
          Reviews
        </h2>
        <p className="text-sm text-[var(--text)]">No reviews yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold text-[var(--main)]">
        Reviews
      </h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
