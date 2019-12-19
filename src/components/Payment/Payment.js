import React, { useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Payment.scss';
import { formatVND } from '../../utils';
import { Button, Icon, Alert, message } from 'antd';

export const Payment = ({ combo, wallet, user, history, requestBuyCombo, subtractEMoney }) => {
	const disabled = useMemo(
		() => {
			if (combo !== undefined && wallet.electronic !== null) {
				return wallet.electronic >= combo.value ? false : true;
			}
			return true;
		},
		[ combo, wallet ]
	);
	const [ isBuying, setIsBuying ] = useState(false);
	const goBack = () => {
		history.goBack();
	};
	const handleBuyCombo = () => {
		setIsBuying(true);
		requestBuyCombo(user._id, combo._id).then((status) => {
			setIsBuying(false);
			switch (status) {
				case 200:
					message.success('Đã mua thành công');
					subtractEMoney(combo.value)
					break;
				case 405:
					message.warn('Gói hội viên đang được xử dụng');
					break;
				default:
					message.error('Mua thất bại, vui lòng kiểm tra kết nối mạng');
					break;
			}
		});
	};

	return combo === undefined ? (
		<Redirect to="/p/home" />
	) : (
		<div className="payment">
			<div className="payment__header d-flex-center">
				{' '}
				<Icon onClick={goBack} className="goback" type="left" />Kiểm tra chi tiết
			</div>
			<div className="payment__body">
				<div className="order">
					<div className="order__label">Đơn hàng</div>
					<div className="order__content">
						<div className="combo-content">
							<span className="combo-content__name">{combo.combo_name}</span>
							<span className="combo-content__price">₫{formatVND(combo.value)}</span>
						</div>
						<hr />
						<div className="total">
							<span className="total__label">Tổng số</span>
							<span className="total__value">₫{formatVND(combo.value)}</span>
						</div>
					</div>
				</div>
				<div className="payment-method">
					<div className="payment-method__label">Phương thức thanh toán</div>
					<div className="payment-method__content">
						<div className="wallet">
							<Icon className="wallet__icon" theme="filled" type="wallet" />
							<div className="wallet__balance">
								<div>Số dư</div>
								<div>
									{wallet.electronic === null ? '----': `VND ${formatVND(wallet.electronic)}`}
								</div>
							</div>
						</div>
						{disabled && <Alert message={wallet.electronic === null ? 'Ví Waza không khả dụng' : 'Bạn không đủ số dư để để mua. Hãy nạp thêm!'} type="warning" />}
					</div>
					<p>
						Bạn sẻ được yêu cầu thanh toán <span>₫{formatVND(combo.value)}</span> / {combo.days} ngày. Tự
						động gia hạn. Hủy bất kỳ lúc nào
					</p>
				</div>
			</div>
			<div className="payment__footer">
				<p className="term">
					Bằng việc đăng ký gói Hội Viên này, bạn đã đồng ý với
					<span className="term__highlight">{` điều khoản và điều kiện và chính sách bảo mật.`}</span>
				</p>
				<Button
					onClick={handleBuyCombo}
					loading={isBuying}
					className={`verify ${!disabled ? 'verify--active' : ''}`}
					disabled={disabled}
				>
					Xác nhận • ₫{formatVND(combo.value)}
				</Button>
			</div>
		</div>
	);
};
