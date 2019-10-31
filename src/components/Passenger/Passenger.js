import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../routes/RouteWithSubRoutes'
const Passenger = ({routes = []}) => (
    <Suspense fallback="...loading">
        <Switch>
            {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
        </Switch>
    </Suspense>
)

export default Passenger