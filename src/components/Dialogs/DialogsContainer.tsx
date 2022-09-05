import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import store, { RootStateType } from "../../redux/store";
import { Dialogs } from "./Dialogs";

// type mapStateToPropsType = {
//     dialogsPage: any
// }


// передача данных в коннект
let mapStateToProps = (state: RootStateType ) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator());
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);