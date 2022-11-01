import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { requiredFiels } from '../../utils/validators/validators'
import { Input } from '../common/FormControls/FormsControls'
import { connect } from 'react-redux'
import { login } from './../../redux/authReducer'
import { Navigate } from 'react-router-dom'
import { RootStateType } from '../../redux/redux-store'
import s from './../common/FormControls/FormControls.module.css'

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[requiredFiels]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          type={'password'}
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
      {
        props.error && <div className={s.formCommonError}>
          {props.error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
export const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)


const Login = (props: any) => {
  const onSubmit = (data: FormDataType) => {
    props.login(data.email, data.password, data.rememberMe);
  }

  // redirect 
  if (props.isAuth) return <Navigate to={'/profile'} />

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth
})
export const LoginContainer = connect(mapStateToProps, { login })(Login)