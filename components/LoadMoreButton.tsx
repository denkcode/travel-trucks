type LoadProps = {
    onClick: () => void,
    disabled: boolean,
    isLoading: boolean
}

export const LoadMoreButton = ({onClick, disabled, isLoading}: LoadProps) => {
    return (
        <button
  className="h-14 min-w-[190px] rounded-[200px] px-8 ![border-width:1px] ![border-style:dashed] ![border-color:#9747FF] text-base font-medium text-[var(--main)] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
  onClick={onClick}
  disabled={disabled}
>
  {isLoading ? "Loading..." : "Load more"}
</button>
    )
}
