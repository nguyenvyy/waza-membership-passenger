import React from 'react'
import { useHistory } from 'react-router-dom'
import './Voucher.scss'
import { Select, Icon } from 'antd';
import { Link } from 'react-router-dom'

const Voucher = () => {
    const history = useHistory();
    const { Option } = Select;
    return (
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
                <p>Service</p>
                <Select defaultValue="All" >
                    <Option value="All">All</Option>
                    <Option value="Food">Food</Option>
                    <Option value="Bike">Bike</Option>
                    <Option value="Shopping">Shopping</Option>
                    <Option value="Move">Move</Option>
                </Select>
           </div>

           <div className="mycombo-card1">
			<div className="mycombo-card__header d-flex-center">Voucher 1<p className="amount">x10</p></div>
			<div className="mycombo-card__body ">
				<div className="voucher-list">
                    <p>Rank: Gold</p>
                    <div></div>
                    <p>Category: Food</p>
				</div>
			</div>
			<div className="mycombo-card__footer">
				<div>Hạn dùng: 25/12/2019</div>
				<div className="renew-panel">
					<Link to="/p/view/8">
                        <p>Xem chi tiết</p>
                    </Link>
				</div>
			</div>
		</div>
       </div>
    )
}
export default Voucher