import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import {Users} from "./Users"

// передача данных в коннект
let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(Users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);