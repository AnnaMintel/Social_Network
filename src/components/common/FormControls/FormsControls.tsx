import React from "react"
import styles from "./FormControls.module.css"

//@ts-ignore
export const Textarea = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea className={showError ? styles.errorField : ''} {...input} {...props} />
            </div>
            {showError && <span className={styles.error}>{meta.error}</span>}
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