import { Navigate, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d: any) =>
        <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.dialogsPage.messagesData.map((m: any) =>
        <Message message={m.message} key={m.id} id={m.id} />);

    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogddMessageForm" })(AddMessageForm)