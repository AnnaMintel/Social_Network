import axios from "axios";
import React from "react";
import { UserPageType } from "../../redux/usersReducer";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component {
    constructor(props: any) {
        super(props);

        //@ts-ignore
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
            //@ts-ignore
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                //@ts-ignore
                this.props.users.map((u: UserPageType) => {
                    //@ts-ignore
                    return <div key={u.id}>
                        <span>
                            <div>
                                {/* @ts-ignore */}
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                            </div>
                            <div>
                                {/* @ts-ignore */}
                                {u.followed
                                    //@ts-ignore
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                    //@ts-ignore
                                    : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                {/* @ts-ignore */}
                                <div>{u.name}</div>
                                {/* @ts-ignore */}
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

            } </div>
    }
}
