import { useState } from "react";
import s from "./Pagination.module.css";

type PaginationType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize?: number
}

export let Pagination: React.FC<PaginationType> = ({ totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREW</button>
        }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={`${currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        }
    </div>

}

