import React, { useState } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

import './Panel.scss'
import { formatVND } from '../../../utils'
import { RechargeWalletModal } from '../../RechargeWallet/RechargeWalletModal'
import { useSelector, useDispatch } from 'react-redux'
import { getWallet } from '../../../redux/actions/wallet/actions'

export const Panel = () => {
    const wallet = useSelector(state => state.wallet)
    const dispatch = useDispatch()
    const reload = () => {
        dispatch(getWallet())
    }
    const [visibleRechargeModal, setVisibleRechargeModal] = useState(false)
    const openRechargeModal = () => setVisibleRechargeModal(true)
    const closeRechargeModal = () => setVisibleRechargeModal(false)

    return (
        <div className="panel d-flex-center">
            <div className="card">
                <div className="card__top">
                    <div className="wallet">
                        <span>
                            Số dư tài khoản:{wallet.electronic !== null ? ` ${formatVND(wallet.electronic)} VNĐ` : ` ----`}
                        </span>
                        {
                            wallet.isFetched && <Icon onClick={openRechargeModal} type="plus" style={{ color: '#531280', fontSize: '1.2em' }} />
                        }
                        {
                            wallet.isFetching && <Icon type="sync" spin style={{ color: '#531280', fontSize: '1.2em' }} />
                        }
                        {
                            wallet.hasError && <Icon onClick={reload} type="reload" style={{ color: 'red', fontSize: '1.2em' }} />
                        }
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