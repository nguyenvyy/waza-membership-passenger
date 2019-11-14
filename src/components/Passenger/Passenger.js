import React, { Suspense, useState, useEffect, useCallback, useRef } from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../routes/RouteWithSubRoutes'
import  NavBar  from '../NavBar/NavBar'
import { Loading } from '../common/Loading/Loading';
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
        if (nextScroll < preScroll) {
            setIsScrollDown(true)
        } else {
            setIsScrollDown(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextScroll])
    const handleScroll = useCallback(event => {
        setNextScroll(event.changedTouches[0].clientY)
    }, [])
    useEffect(() => {
        window.addEventListener('touchmove', handleScroll);
        return () => {
            window.removeEventListener('touchmove', handleScroll);
        }
    }, [handleScroll])
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Switch>
                    {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
                </Switch>
            </Suspense>
            <NavBar collapsed={isScrollDown}/>
        </div>
    )
}

export default Passenger