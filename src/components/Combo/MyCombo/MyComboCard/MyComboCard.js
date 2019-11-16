import React, { useMemo } from 'react';
import './MyComboCard.scss';
import moment from 'moment';
import { formatVND, upperCaseFirstCharacter } from '../../../../utils';
import { Button, Icon } from 'antd';

export const MyComboCard = ({ combo }) => {
	const daysLeft = useMemo(
		() => {
			const curr = Date.now();
			const toDate = moment(combo.to_date).valueOf();
			const result = moment.duration(toDate - curr, 'milliseconds');
			return result.days();
			// moment
		},
		[ combo.to_date ]
	);

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
				<div>Hạn dùng: {daysLeft} ngày</div>
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
