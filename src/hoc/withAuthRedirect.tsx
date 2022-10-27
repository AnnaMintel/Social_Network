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

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: any) => {
        let {isAuth, ...restProps} = props
        
        // ПОКА ЗАКОММЕНТИМ, ТАК КАК ПАДАЕТ КОРС ОШИБКА
        // if (!isAuth) return <Navigate to={'/login'} />

        return <Component {...restProps } />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}