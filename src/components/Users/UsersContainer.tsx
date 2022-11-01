import React from "react";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import {
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserPageType
} from "../../redux/usersReducer";
import { Preloader } from "../common/preloader/Preloader";
import { Users } from "./Users";
import { RootStateType } from "../../redux/redux-store";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    users: Array<UserPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        //@ts-ignore
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        //@ts-ignore
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        //@ts-ignore
        if (!this.props.isAuth) return <Navigate to={'/login'} />

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            toggleFollowingProgress, getUsers
        })
)(UsersContainer)
