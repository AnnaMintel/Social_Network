import React from "react";
import s from "./Dialogs.module.css"; 

export const Dialogs = (props: any) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                   Anna 
                </div>
                <div className={s.dialog}>
                   Angelina 
                </div>
                <div className={s.dialog}>
                   Vanessa
                </div>
                <div className={s.dialog}>
                   Rodrik
                </div>
                <div className={s.dialog}>
                   Ivan 
                </div>
                <div className={s.dialog}>
                   Eva 
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you doing?</div>
                <div className={s.dialog}>Whats going on?</div>
            </div>
        </div>
    )
}