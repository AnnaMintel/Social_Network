import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import { RootStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

// передача данных в коннект
let mapStateToProps = (state: RootStateType ) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);