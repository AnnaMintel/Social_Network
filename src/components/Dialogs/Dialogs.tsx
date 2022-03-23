import React from "react";
import { NavLink } from "react-router-dom"; 
import s from "./Dialogs.module.css";

type DialogItemType ={
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

type MessageType ={
    message: string
    id: number
}

const Message = (props:MessageType ) =>{
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'}, 
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Angelina'},
        {id: 4, name: 'Vanessa'},
        {id: 5, name: 'Eva'},
        {id: 6, name: 'Rodrik'}
    ]
    let messageData =  [
        {id: 1, message: 'Hi!!!'}, 
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Whats going on?'},
        {id: 4, message: 'Hello, my dear'},
        {id: 5, message: 'What are you doing today?'},
        {id: 6, message: 'Happy weekends!'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem  name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                
            </div>
        </div>
    )
}