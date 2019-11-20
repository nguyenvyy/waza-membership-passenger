import { Redirect } from 'react-router-dom'
import { lazy } from 'react'

import { PrivateRoute } from '../routes/PrivateRoute'

export const comboPath = '/p/combo'
export const comboGroupPath = '/p/combo/browser'
export const comboBuy = '/p/buy'
export const comboDetailPath = '/p/combo/detail'
const PassengerLayout = lazy(() => import('../components/Passenger/Passenger'))
const LoginPage = lazy(() => import('../components/Login/Login'))
const HomePage = lazy(() => import('../redux/container/Home'))
const ComboPage = lazy(() => import('../components/Combo/Combo'))
const BrowserComboPage = lazy(() => import('../redux/container/BrowserCombo'))
const PaymentPage = lazy(() => import('../redux/container/Payment'))
const AccountPage = lazy(() => import('../components/Account/Account'))
const MyComboPage = lazy(() => import('../redux/container/MyCombo'))
const ComboDetailPage = lazy(() => import('../components/ComboDetail/ComboDetail'));
export const routes = [
    {
        path: '/',
        customRoute: Redirect,
        to: '/p',
        exact: true,
    },
    {
        path: '/p',
        component: PassengerLayout,
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
                component: HomePage
            },
            {
                path: '/p/combo',
                component: ComboPage,
                routes: [
                    {
                        path: '/p/combo',
                        customRoute: Redirect,
                        to: '/p/combo/browser',
                        exact: true,
                    },
                    {
                        path: '/p/combo/browser',
                        component: BrowserComboPage
                    },
                    {
                        path: '/p/combo/my',
                        component: MyComboPage
                    },
                    {
                        path: '/p/combo/detail/:id',
                        component: ComboDetailPage
                    }
                ]
            },
            {
                path: '/p/buy/:id',
                component: PaymentPage
            },
            {
                path: '/p/user',
                component: AccountPage
            }

        ]
        ,
    },
    {
        path: '/login',
        component: LoginPage
    }
]