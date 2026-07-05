export const Rating = ({ rating }: { rating: number }) => {
  const resultMath = Math.round(rating);
  const arrayNumber = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {arrayNumber.map((star) => {
        const isActive = star <= resultMath;

        return (
          <svg
          width={16} height={16}
            key={star}
            className={isActive ? "text-[var(--rating)]" : "text-[var(--gray-light)]"}
          >
            <use href="/sprite.svg#icon-star" />
          </svg>
        );
      })}
    </div>
  );
};