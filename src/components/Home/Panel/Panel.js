import React, { useState } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

import './Panel.scss'
import { formatVND } from '../../../utils'
import { RechargeWalletModal } from '../../RechargeWallet/RechargeWalletModal'

export const Panel = ({ balance }) => {
    const [visibleRechargeModal, setVisibleRechargeModal] = useState(false)
    const openRechargeModal = () => setVisibleRechargeModal(true)
    const closeRechargeModal = () => setVisibleRechargeModal(false)

    return (
        <div className="panel d-flex-center">
            <div className="card">
                <div className="card__top">
                    <div className="wallet">
                        <span>
                            Số dư tài khoản: {formatVND(balance)} VNĐ
                        </span>
                        <Icon onClick={openRechargeModal} type="plus" style={{ color: '#531280', fontSize: '1.2em' }} />
                        <RechargeWalletModal
                            visible={visibleRechargeModal}
                            open={openRechargeModal}
                            close={closeRechargeModal}
                        />
                    </div>
                </div>
                <div className="card__bottom" >
                    <Link className="link" to="/p/voucher" >
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