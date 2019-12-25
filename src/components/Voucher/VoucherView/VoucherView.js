import React, {useEffect} from 'react'
import '../Voucher.scss'
import { useHistory } from 'react-router-dom'
import { Icon } from 'antd';


const VoucherView = () => {
    
    
    useEffect(() => {
        console.log('aaaa')
    })
    const history = useHistory();
    return (
        <div className="voucher-view">
            <div className="header-view">
                <p>Chi tiết ưu đãi</p>
                <div className="close-icon" onClick={() => history.push('/p/voucher')}>
                    <Icon type="close" />
                </div>
            </div>
            <div className="content-view">
                <div className="title-content">
                    <p className="name">Voucher 026</p>
                    <div className="gift">Được tặng</div>
                    <div className="content-gift">
                        <p>Rank: Gold</p>
                        <p>Hiệu lực: 22/15/2019</p>
				    </div>
                </div>
                <div className="description-content">
                    <div className="description">
                        <div className="traffic"></div>
                        <p>Đây là voucher 026</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VoucherView