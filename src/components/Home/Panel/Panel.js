import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

import './Panel.scss'
import { formatVND } from '../../../utils'

export const Panel = ({ balance }) => {

    return (
        <div className="panel d-flex-center">
            <div className="card">
                <p className="card__top">Số dư tài khoản: {formatVND(balance)} VNĐ </p>
                <div className="card__bottom" >
                    <Link className="link"  to="/p/voucher" >
                        <Icon type="forward" /> Ưu đãi <Icon type="backward" />
                    </Link>
                    <Link className="link" to="/p/combo" >
                        <Icon type="forward" /> Gói hội viên <Icon type="backward" />
                    </Link>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}