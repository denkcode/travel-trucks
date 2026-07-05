import Loading from "./Loading"

type LoadProps = {
    onClick: () => void,
    disabled: boolean,
    isLoading: boolean
}

export const LoadMoreButton = ({onClick, disabled, isLoading}: LoadProps) => {
    return (
        <div className="w-[145px] h-[56px] rounded-[200px] border border-[var(--gray-light)] px-8 py-4">
            <button className="" onClick={onClick} disabled={disabled}>{isLoading ?  <Loading /> : "Load more"}</button>
        </div>
    )
}