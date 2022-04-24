import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogsPage.dialogsData.map((dialog: any) => <DialogItem name={dialog.name} id={dialog.id} />);  

    let messagesElements = props.state.dialogsPage.messagesData.map((message: any) => <Message message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}