import React, { useState, useEffect } from 'react';
import './MyComboCard.scss';
import moment from 'moment';
import { formatVND, upperCaseFirstCharacter } from '../../../../utils';
import { Button, Icon } from 'antd';
import { formatOfDateFromDB } from '../../../../constant';

export const MyComboCard = ({ combo }) => {
	const [daysLeft, setDaysLeft] = useState('')
	useEffect(() => {
		setDaysLeft(calculateDaysLeft())
		const _1Hour = 3600000;
		let interval = setInterval(() => {
			setDaysLeft(calculateDaysLeft())
		}, _1Hour);
		return () => clearInterval(interval)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) 

	const calculateDaysLeft = () => {
		const curr = Date.now();
		const toDate = moment(combo.to_date, formatOfDateFromDB).valueOf();
		const result = moment.duration(toDate - curr, 'milliseconds').asHours();
		const day = Math.floor(result/24)
		const hours = Math.floor(result%24)
		return `${day} ngày ${hours} giờ`
	}

	return (
		<div className="mycombo-card">
			<div className="mycombo-card__header d-flex-center">{combo.combo_name}</div>
			<div className="mycombo-card__body ">
				<ul className="voucher-list d-flex-center">
					{combo.vouchers.map((voucher) => (
						<li key={voucher._id}>
							<span className="content">
								{`${voucher.count} x Mã ưu đãi ${voucher.discount > 0
									? voucher.discount + '% tối đa'
									: ''} đ${formatVND(voucher.value)}  Waza${upperCaseFirstCharacter(
									voucher.category
								)}`}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mycombo-card__footer">
				<div>Hạn dùng: {daysLeft}</div>
				<div className="renew-panel">
					<span>Gia hạn: </span>
					<Button.Group size="small">
						<Button className="renew-panel__button">
							<Icon className="selected-icon" type="right" />
                            Tự động
						</Button>
						<Button className="renew-panel__button">
							<Icon className="selected-icon" type="right" /> 
                            Dừng
						</Button>
					</Button.Group>
				</div>
			</div>
		</div>
	);
};
