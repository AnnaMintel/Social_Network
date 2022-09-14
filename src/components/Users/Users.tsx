import axios from "axios";
import React from "react";
import { UserPageType } from "../../redux/usersReducer";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
                 //@ts-ignore
                 this.props.setTotalUsersCount(response.data.totalCount)
            });
    }


    render() {
        //@ts-ignore
        console.log(this.props.totalUsersCount);
        //@ts-ignore
        console.log(this.props.pageSize);
        
        //@ts-ignore
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        //@ts-ignore
        let onPageChanged = (pageNumber) => {
            //@ts-ignore
            this.props.setCurrentPage(pageNumber);
            //@ts-ignore
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
               
            });
        }

        return <div>
            <div>
                {pages.map(p => {
                    //@ts-ignore
                    return <span className={this.props.currentPage === p && s.selectedPage}
                        //@ts-ignore
                        onClick={(e) => {onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map((u: UserPageType) => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
}
