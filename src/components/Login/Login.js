import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Login.scss'
import { LoginForm } from './LoginForm/LoginForm'

const Login = ({ location }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const isLoading = useSelector(state => state.auth.isLoading)
    const { from } = location.state || { from: { pathname: '/' } }
    return (
        isLoggedIn ? (<Redirect to={from} />) : (
            <div className="login">
                <div className="header d-flex-center">
                    <h1>WAZA</h1>
                    <h2>Membership</h2>
                </div>
                <div className="body">
                    <LoginForm dispatch={dispatch} isLoading={isLoading} />
                </div>
                <div className="footer">

                </div>
            </div>

        )
    )
}

export default Login