import { Navigate, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredFiels } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormsControls";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export const Dialogs = (props: any) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((d: any) =>
        <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.dialogsPage.messagesData.map((m: any) =>
        <Message message={m.message} key={m.id} id={m.id} />);

    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    }

    // // redirect
    // if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody'
                    component={Textarea}
                    placeholder={'Enter your message'}
                    validate={[requiredFiels, maxLength100]} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogddMessageForm" })(AddMessageForm)
