import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogItemType ={
    id: string
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
}

const Message = (props:MessageType ) =>{
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  name="Anna" id="1"/>
                <DialogItem  name="Angelina" id="2"/>
                <DialogItem  name="Vanessa" id="3"/>
                <DialogItem  name="Rodrik" id="4"/>
                <DialogItem  name="Andrew" id="5"/>
                <DialogItem  name="Eva" id="6"/>

            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you doing?"/>
                <Message message="Whats going on?"/>
                <Message message="Hey"/>
                <Message message="hEY"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}