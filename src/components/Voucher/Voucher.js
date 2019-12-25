import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './Voucher.scss'
import {Icon } from 'antd';
import {useSelector} from 'react-redux'
import { getMyVoucherAPI } from '../../redux/actions/voucher/voucher';

import moment from 'moment'
import { LoadingAdvance } from '../common/Loading/Loading';

const Voucher = () => {
    const history = useHistory();

    const id = useSelector(state => state.auth.user._id)

    const { isFetching, isFetched } = useSelector(state => state.history)

    const intitalState = {
        dataMyVoucher: ''
    }

    const [toggle, setToggle] = useState(intitalState)

    const getDataMyVoucher = () => {
        getMyVoucherAPI(id && id)
        .then(res => {
            setToggle({
                ...toggle,
                dataMyVoucher: res
            })
        })
        .catch (err => {
            setToggle({
                ...toggle,
                dataMyVoucher: []
            })  
        })
    }

    useEffect(() => {
            getDataMyVoucher()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const refreshData = () => {
            getDataMyVoucher()
    }
    return (
        <LoadingAdvance loading={isFetching && isFetched === false}>
            <div className="voucher-page">
                <div className="header-vouccher">
                    <div className="title-voucher">Gói ưu đãi</div>
                    <div className="close-icon" onClick={() => history.push('/p/home')}>
                            <Icon type="close" />
                        </div>
                </div>
                <div>
                        <div className="header-vouccher1">
                            <div className="title-voucher1">Gói ưu đãi của tôi</div>
                        </div>
                </div>
                <div className="filter-voucher">
                <Icon onClick={refreshData}  type="reload" />
                </div>
                    {toggle.dataMyVoucher && toggle.dataMyVoucher.map(voucher => {
                        return <div className="mycombo-card1">
                        <div className="mycombo-card__header d-flex-center">{voucher.voucher_name}<p className="amount">x1</p></div>
                        <div className="mycombo-card__body ">
                            <div className="voucher-list">
                                <p>Dịch vụ: {voucher.service}</p>
                            </div>
                        </div>
                        <div className="mycombo-card__footer">
                            <div>Hạn dùng: {moment(voucher.to_date).format('DD/MM/YYYY')}</div>
                            <div className="renew-panel">
                            </div>
                        </div>
                    </div>
                    })}
            </div>
        </LoadingAdvance>
    )
}
export default Voucher