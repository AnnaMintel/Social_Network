import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import store, { RootStateType } from "../../redux/store";
import { Dialogs } from "./Dialogs";

// передача данных в коннект
let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// передача функций в коннект
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: () => {
            store.dispatch(sendMessageActionCreator());
        },
        sendMessage: (body: any) => {
            store.dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);