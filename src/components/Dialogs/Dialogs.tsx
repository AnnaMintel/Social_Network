import React, { useState } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogsData.map((dialog: any) =>
        <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData.map((message: any) =>
        <Message message={message.message} id={message.id} />);

    let [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        alert(newMessage);
        setNewMessage("");
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={ (e) => { setNewMessage(e.currentTarget.value)}} value={newMessage}/>
                <button onClick={sendMessage}>+</button>
            </div>
        </div>
    )
}