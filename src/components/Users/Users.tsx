import axios from "axios";
import React from "react";
import { UserPageType } from "../../redux/usersReducer";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";
import userPhoto from '../../assets/images/user.png'

export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        //@ts-ignore
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
                props.setUsers(response.data.items)
            });
        }
    } 

    return <div>
        <button onClick={getUsers}>get users</button>
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