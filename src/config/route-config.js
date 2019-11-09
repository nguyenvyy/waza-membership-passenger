import { Redirect } from 'react-router-dom'
import { lazy } from 'react'

import { PrivateRoute } from '../routes/PrivateRoute'

const Passenger = lazy(() => import('../components/Passenger/Passenger'))
const Login = lazy(() => import('../components/Login/Login'))
const Home = lazy(() => import('../redux/container/Home'))

export const routes = [
    {
        path: '/',
        customRoute: Redirect,
        to: '/p',
        exact: true,
    },
    {
        path: '/p',
        component: Passenger,
        customRoute: PrivateRoute,
        routes: [
            {
                from: '/p',
                exact: true,
                customRoute: Redirect,
                to: '/p/home'
            },
            {
                path: '/p/home',
                component: Home
            }
        ]
        ,
    },
    {
        path: '/login',
        component: Login
    }
]