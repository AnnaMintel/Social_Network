import React, { useState } from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";


export const DialogsContainer = (props: any) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onSendMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return <Dialogs updateNewMessageBody={onSendMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state.dialogsPage}
    />
}