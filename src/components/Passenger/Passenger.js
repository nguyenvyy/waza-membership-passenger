import React, { Suspense, useState, useEffect, useCallback, useRef } from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../routes/RouteWithSubRoutes'
import { NavBar } from '../NavBar/NavBar'
export const usePrevious = value => {
    const previous = useRef();
    useEffect(() => {
        previous.current = value;
    }, [value]);
    return previous.current;
};

const Passenger = ({ routes = [] }) => {
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [nextScroll, setNextScroll] = useState(0)
    const preScroll = usePrevious(nextScroll)
    useEffect(() => {
        if (nextScroll > preScroll) {
            setIsScrollDown(true)
        } else {
            setIsScrollDown(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextScroll])
    const handleScroll = useCallback(event => {
        setNextScroll(event.target.documentElement.scrollTop)
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll])
    return (
        <div>
            <Suspense fallback="...loading">
                <Switch>
                    {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
                </Switch>
            </Suspense>
            <NavBar collapsed={isScrollDown}/>
        </div>
    )
}

export default Passenger