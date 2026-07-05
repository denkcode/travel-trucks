'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="w-[320px] rounded-3xl bg-white px-8 py-10 shadow-xl flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[var(--gray-light)] border-t-[var(--grey-green)] animate-spin" />

        <p className="text-base font-medium text-[var(--main)]">
          Loading tracks...
        </p>

        <p className="text-center text-sm text-[var(--gray)]">
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}