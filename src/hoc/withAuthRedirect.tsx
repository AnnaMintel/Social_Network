import React, { ComponentType } from 'react'
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import { RootStateType } from '../redux/redux-store'

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirectz<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: any) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'} />

        return <Component {...restProps } />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}