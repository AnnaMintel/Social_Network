import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { requiredFiels } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormControls/FormsControls'
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

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField('Email','email', [requiredFiels], Input )}
        {createField('Password','password', [requiredFiels], Input, {type: 'password'} )}
        {createField(' ','rememberMe', [], Input, {type: 'checkbox'}, 'remember me' )}
      
      { error && <div className={s.formCommonError}>
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)


type MatStatePropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<MatStatePropsType & MapDispatchPropsType> = (props: any) => {
  const onSubmit = (data: FormDataType) => {
    props.login(data.email, data.password, data.rememberMe);
  }

  if (props.isAuth) return <Navigate to={'/profile'} />

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state: RootStateType): MatStatePropsType => ({
  isAuth: state.auth.isAuth
})
export const LoginContainer = connect(mapStateToProps, { login })(Login)