import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import { RootStateType } from "../../redux/store";
import { Dialogs } from "./Dialogs";


export const DialogsContainer = (props: any) => {

    const dispatch = useDispatch();

    const dialogsPage = useSelector<RootStateType>(state => state.dialogsPage)

    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    let onSendMessageChange = (body: any) => {
        dispatch(updateNewMessageBodyActionCreator(body));
    }

    return <Dialogs updateNewMessageBody={onSendMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={dialogsPage}
    />
}