"use client"
import { useCatalogFilters } from '@/features/catalog/hooks/useCatalogFilters';
import { CamperCardList } from '@/features/components/CamperCardList';
import { LoadMoreButton } from '@/features/components/LoadMoreButton';
import { useCampersInfinite } from '@/features/catalog/hooks/useCampersInfinite';
import Loading from '@/features/components/Loading';
import CamperFilters from "@/features/components/CamperFilters";
import NoCampersFound from "@/features/components/NoCampersFound";
import { Suspense } from 'react';

function CatalogContent() {
  const { filters, updateFilters } = useCatalogFilters();
  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCampersInfinite(filters);

  if (isLoading || (isFetching && !isFetchingNextPage)) {
    return <Loading />;
  }

  const campers = data?.pages?.flatMap((page) => page.campers) ?? [];
  const hasCampers = campers.length > 0;
  const filtersKey = JSON.stringify(filters);
  const clearFilters = () =>
    updateFilters({
      location: undefined,
      form: undefined,
      transmission: undefined,
      engine: undefined,
    });

  return (
    <div className="flex gap-8 px-[64px] pt-[48px]">
      <CamperFilters key={filtersKey} />

      <div className="flex flex-col flex-1 gap-6">
        {hasCampers ? (
          <>
            <CamperCardList campers={campers} />

            <div className='flex justify-center mb-5 '>
              <LoadMoreButton
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                isLoading={isFetchingNextPage}
              />
            </div>
          </>
        ) : (
          <NoCampersFound onClearFilters={clearFilters} />
        )}
      </div>
    </div>
  );
}

export default function Campers() {
  return (
    <Suspense fallback={<Loading />}>
      <CatalogContent />
    </Suspense>
  );
}
