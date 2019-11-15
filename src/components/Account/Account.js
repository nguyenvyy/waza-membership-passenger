import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Account.scss';
import { LoadingAdvance } from '../common/Loading/Loading';
import { formatVND } from '../../utils';
import { Button } from 'antd';
import { clearAuth } from '../../redux/actions/auth/actions';
const Account = () => {
	const dispatch = useDispatch();
    const {user, wallet} = useSelector((state) => state.auth);
    const handleLogout = () => {
        dispatch(clearAuth())
    }
	return (
		<LoadingAdvance>
			<div className="account">
				<div className="account__header d-flex-center">
					<div className="img-wrapper d-flex-center">
						<img src={user.image} alt="user" />
					</div>
					<div className="user-name">{user.fullName}</div>
				</div>
                <div className="account__body">
                    <div>
                        <span>Số dư: </span>
                        <span>{formatVND(wallet.balance)} VNĐ</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>Số điện thoại: </span>
                        <span>{user.phone}</span>
                    </div>
                    <div className="log-out d-flex-center">
                    <Button onClick={handleLogout}>Đăng xuất</Button>
                    </div>
                </div>
			</div>
		</LoadingAdvance>
	);
};

export default Account;
