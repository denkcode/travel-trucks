"use client"
import { useCatalogFilters } from '@/features/catalog/hooks/useCatalogFilters';
import { CamperCardList } from '@/features/components/CamperCardList';
import { LoadMoreButton } from '@/features/components/LoadMoreButton';
import { useCampersInfinite } from '@/features/catalog/hooks/useCampersInfinite';
import Loading from '@/features/components/Loading';
import CamperFilters from "@/features/components/CamperFilters";
export const Campers = () => {
  const { filters } = useCatalogFilters();
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

return (
  <div className="flex gap-8 px-[64px] pt-[48px]">
    <CamperFilters />

    <div className="flex flex-col flex-1 gap-6">
      <CamperCardList campers={campers} />

      <div className='flex justify-center'>
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={isFetchingNextPage}
        />
      </div>
    </div>
  </div>
);
}

export default Campers