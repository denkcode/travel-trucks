import { Rating } from "@/components/Rating";
import type { Review } from "@/types";

type ReviewItemProps = {
  review: Review;
};

export default function ReviewItem({ review }: ReviewItemProps) {
  const initial = review.reviewer_name.charAt(0).toUpperCase();

  return (
    <article className="rounded-2xl bg-[var(--inputs)] p-5">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--white)] text-lg font-semibold text-[var(--grey-green)]">
          {initial}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--main)]">
            {review.reviewer_name}
          </h3>
          <Rating rating={review.reviewer_rating} />
        </div>
      </div>

      <p className="text-sm leading-[150%] text-[var(--text)]">
        {review.comment}
      </p>
    </article>
  );
}
