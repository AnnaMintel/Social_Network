
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAC, InitialStateType, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UserPageType } from "../../redux/usersReducer";
import {Users} from "./Users"

type MapStateToPropsType = {
    users: Array<UserPageType>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);