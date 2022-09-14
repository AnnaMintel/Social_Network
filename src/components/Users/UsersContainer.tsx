
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAC, InitialStateType, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UserPageType } from "../../redux/usersReducer";
import { Users } from "./Users";


type MapStateToPropsType = {
    users: Array<UserPageType>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
                //@ts-ignore
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: any) => {
        //@ts-ignore
        this.props.setCurrentPage(pageNumber);
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)

            });
    }

    render() {
        //@ts-ignore
        return <Users totalUsersCount={this.props.totalUsersCount}
            //@ts-ignore
            pageSize={this.props.pageSize}
            //@ts-ignore
            currentPage={this.props.currentPage}
            //@ts-ignore
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            
        />
    }
}


// передача данных в коннект
let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: Array<UserPageType>) => {
            dispatch(setUsersAC(users));
        },
        //@ts-ignore
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        //@ts-ignore
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);