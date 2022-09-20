
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { follow, InitialStateType, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow, UserPageType } from "../../redux/usersReducer";
import { Preloader } from "../common/preloader/Preloader";
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
        this.props.toggleIsFetchingAC(true);
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                //@ts-ignore
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items);
                //@ts-ignore
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: any) => {
        //@ts-ignore
        this.props.setCurrentPage(pageNumber);
        //@ts-ignore
        this.props.toggleIsFetchingAC(true);
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                //@ts-ignore
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items)

            });
    }

    render() {

        return <>
            {/* @ts-ignore */}
            {this.props.isFetching ? <Preloader /> : null}
            {/* @ts-ignore */}
            <Users totalUsersCount={this.props.totalUsersCount}
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
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users: Array<UserPageType>) => {
//             dispatch(setUsersAC(users));
//         },
//         //@ts-ignore
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         //@ts-ignore
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         //@ts-ignore
//         toggleIsFetchingAC: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching })
    (UsersContainer);