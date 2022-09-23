import React from "react";
import s from "./users.module.css";
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { UserPageType } from "../../redux/usersReducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserPageType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span key={index} className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map((u: UserPageType) => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location?.city'}</div>
                            <div>{'u.location?.country'}</div>
                        </span>
                    </span>
                </div>
            }
            )
        }
    </div>

}

