import React from 'react'
import './PolicyCard.scss'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { comboGroupPath } from '../../../../config/route-config'
export const PolicyCard = ({policy}) => {
    const history = useHistory()
    const goComboGroup = () => {
        history.push(`${comboGroupPath}/${policy._id}`)
    }
    return (
        <div className="policy-card d-flex-center" onClick={goComboGroup}>
            <div className="policy-card__top d-flex-center" >
                <span className="before"></span>
                <span className="after"></span>
                <span className="content">
                    ƯU Đãi {policy.extra_percent}%
                </span>
                <ul className="line">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
            <div className="policy-card__bottom d-flex-center" >
                <div className="grid-wrapper">
                    <div className="content d-flex-center">
                        <b>
                            {policy.policy_name}
                        </b>
                    </div>
                    <Button >Xem Gói</Button>
                </div>
            </div>
        </div>
    )
}