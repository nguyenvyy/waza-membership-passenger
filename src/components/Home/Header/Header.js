import React, { useMemo } from 'react'

import './Header.scss'
import { checkHours } from '../../../utils'

export const Header = ({ username }) => {
    const currentHousr = useMemo(() => {
        const now = (new Date()).getHours()
        return checkHours(now)
    }, [])
    return (
        <div className="header">
            <p className="header__title">
                Chúc <b> {username} </b> {currentHousr} tốt lành!
            </p>
        </div>
    )
}