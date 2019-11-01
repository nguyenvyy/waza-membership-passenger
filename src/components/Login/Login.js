import React from 'react'
import './Login.scss'
import { LoginForm } from './LoginForm/LoginForm'

const Login = () => {

    return (
        <div className="login">
            <div className="header d-flex-center">
                <h1>WAZA</h1>
                <h2>Membership</h2>
            </div>
            <div className="body">
                <LoginForm />
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default Login