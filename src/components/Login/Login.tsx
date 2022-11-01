import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { requiredFiels } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormsControls'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Login'}
          name={'login'}
          component={Input}
          validate={[requiredFiels]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={Input}
          validate={[requiredFiels]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={'rememberMe'}
          type={'checkbox'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)


export const Login = () => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}