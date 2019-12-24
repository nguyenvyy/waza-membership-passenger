import React, { useState, useEffect } from 'react';
import './MyComboCard.scss';
import moment from 'moment';
import { formatVND, upperCaseFirstCharacter } from '../../../../utils';
import { Button, Icon, Tag, message } from 'antd';
import { useDispatch } from 'react-redux';
import { requestStopAutoRenew, requestAutoRenew } from '../../../../redux/actions/my-combos/actions';

export const MyComboCard = ({ combo }) => {
	const dispatch = useDispatch()
	const [daysLeft, setDaysLeft] = useState('')
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		// calculateDaysLeft init
		setDaysLeft(calculateDaysLeft())
		let interval, timeout
		const curr = new Date();
		const nextHour = new Date(curr);
		nextHour.setHours(curr.getHours() + 1, 0, 0)
		const _1Hour = 3600000;
		// count down from curr -> next hour
		timeout = setTimeout(() => {
			// calculateDaysLeft per hour
			interval = setInterval(() => {
				setDaysLeft(calculateDaysLeft())
			}, _1Hour);
		}, nextHour - curr)
		return () => {
			// clear timeout, interval when component unmount
			clearInterval(interval)
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const calculateDaysLeft = () => {
		const curr = Date.now();
		const toDate = new Date(combo.to_date);
		toDate.setHours(23, 59, 59)
		const result = moment.duration(toDate.getTime() - curr, 'milliseconds').asHours();
		const day = Math.floor(result / 24)
		const hours = Math.floor(result % 24)
		return `${day} ngày ${hours} giờ`
	}

	const handleStopRenew = () => {
		setLoading(true)
		dispatch(requestStopAutoRenew(combo.combo_id)).then(status => {
			setLoading(false)
			if (status === 200) {
				message.success("Dừng gia hạn thành công", 2)
			} else {
				message.error("Dừng gia hạn thất bại", 2)
			}
		})
	}

	const handleAutoRenew = () => {
		setLoading(true)
		dispatch(requestAutoRenew(combo.combo_id)).then(status => {
			setLoading(false)
			if (status === 200) {
				message.success("Tự động gia hạn thành công", 2)
			} else {
				message.error("Tự động gia hạn thất bại", 2)
			}
		})
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
									: ''} ₫${formatVND(voucher.value)}  Waza${upperCaseFirstCharacter(
										voucher.category
									)}`}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mycombo-card__footer">
				<div >Hạn dùng: {daysLeft}</div>
				<div className="renew-panel">
					<span>Gia hạn: </span>
					{
						combo.autoRenew !== null ? (
							<Button.Group size="default">
								<Button
									loading={loading}
									onClick={handleAutoRenew}
									disabled={combo.autoRenew === true}
									className="renew-panel__button">
									{combo.autoRenew === true && <Icon className="selected-icon" type="right" />}
									Tự động
							</Button>
								<Button
									loading={loading}
									onClick={handleStopRenew}
									disabled={combo.autoRenew === false}
									className="renew-panel__button">
									{combo.autoRenew === false && <Icon className="selected-icon" type="right" />}
									Dừng
							</Button>
							</Button.Group>
						) : (
								<Tag color="red">Không khả dụng</Tag>
							)
					}
				</div>
			</div>
		</div>
	);
};
