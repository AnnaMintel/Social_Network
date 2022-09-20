import React from "react";
import s from "./users.module.css";
import userPhoto from '../../assets/images/user.png';

export let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
                <div>
                 {pages.map(p => {
                        // @ts-ignore
                        return <span className={props.currentPage === p && s.selectedPage}
                        //@ts-ignore
                        onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
            {
                //@ts-ignore
                props.users.map((u: UserPageType) => {
                    return <div key={u.id}>
                        <span>
                            <div>
                            {/* @ts-ignore */}
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
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

