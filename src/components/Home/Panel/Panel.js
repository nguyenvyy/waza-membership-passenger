import React, { useState } from 'react'
import { Icon } from 'antd'

import './Panel.scss'
import { formatVND } from '../../../utils'
import { Combo } from '../../Combo/Combo'

export const Panel = ({ wallet }) => {
    const [visible, setVisible] = useState(false)
    const handleClose = () => {
        setVisible(false)
    }
    const handleOpen = () => {
        setVisible(true)
    }
    return (
        <div className="panel">
            <div className="card">
                <p className="card__top">Số dư tài khoản: {formatVND(wallet.balance)} VNĐ </p>
                <div className="card__bottom" >
                    <span className="link">
                        <Icon type="forward" /> Ưu đãi <Icon type="backward" />
                    </span>
                    <span className="link" onClick={handleOpen} >
                        <Icon type="forward" /> Gói hội viên <Icon type="backward" />
                    </span>
                </div>
                <Combo visible={visible} handleClose={handleClose}  />
            </div>
            <div>
            </div>
        </div>
    )
}