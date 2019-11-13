import React from 'react'
import './PolicyCard.scss'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
export const PolicyCard = (policy) => {
    const history = useHistory()
    let mockup = {
        extra_percent: 100,
        voucher_percent: [
            50,
            50
        ],
        isDeleted: false,
        _id: '5dc6c2c89bc9e400179bae7f',
        policy_name: 'Gói Đôi Tiết Kiệm 100%',
        description: '...',
        createdAt: '2019-11-09T13:44:40.762Z',
        updatedAt: '2019-11-09T13:44:40.762Z',
        __v: 0
    }

    const goComboGroup = () => {
        history.push('/p/home/a')
    }
    return (
        <div className="policy-card d-flex-center" onClick={goComboGroup}>
            <div className="policy-card__top d-flex-center" >
                <span className="before"></span>
                <span className="after"></span>
                <span className="content">
                    ƯU Đãi {mockup.extra_percent}%
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
                            {mockup.policy_name}
                        </b>
                    </div>
                    <Button >Xem Gói</Button>
                </div>
            </div>
        </div>
    )
}