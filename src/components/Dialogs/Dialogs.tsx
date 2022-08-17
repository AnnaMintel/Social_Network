import React, { useState } from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((dialog: any) =>
        <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messagesData.map((message: any) =>
        <Message message={message.message} id={message.id} />);

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onSendMessageChange = (event: any) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageBody}
                            onChange={onSendMessageChange}  
                            placeholder="Enter your message"
                            />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}