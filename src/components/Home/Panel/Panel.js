import React from 'react'
import { Link } from 'react-router-dom'

import './Panel.scss'
import { formatVND } from '../../../utils'
import { Icon } from 'antd'

export const Panel = ({ wallet }) => {
    return (
        <div className="panel">
                <div className="card">
                    <p className="card__top">Số dư tài khoản: {formatVND(wallet.balance)} VNĐ </p>
                    <div className="card__bottom" >
                        <Link className="link" to="/p/voucher"><Icon type="backward" /> Ưu đãi</Link>
                        <Link  className="link" to="/p/combo">Gói hội viên <Icon type="forward" /></Link>
                    </div>
                </div>
                <div>
                    
                </div>
        </div>
    )
}