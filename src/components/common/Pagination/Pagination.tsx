import React from "react";
import s from "./Pagination.module.css";

type PaginationType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export let Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanged }: PaginationType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map((p, index) => {
            return <span key={index} className={currentPage === p ? s.selectedPage : ''}
                onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}
    </div>

}

