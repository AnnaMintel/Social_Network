import React from "react"
import { Field } from "redux-form";
import styles from "./FormControls.module.css"

//@ts-ignore
export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
    const showError = touched && error;
    return (
        <div>
            <div>
                <textarea className={showError ? styles.errorField : ''} {...input} {...props} />
            </div>
            {showError && <span className={styles.error}>{error}</span>}
        </div>
    )
}

//@ts-ignore
export const Input = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input className={showError ? styles.errorField : ''} {...input} {...props} />
            </div>
            {showError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const createField = (
    placeholder: any,
    name: any,
    validators: any,
    component: any,
    props = {},
    text = ''
) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)