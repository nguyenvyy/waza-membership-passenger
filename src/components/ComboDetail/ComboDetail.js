import React, { useMemo } from 'react'
import { Redirect } from 'react-router-dom'
import './ComboDetail.scss'
import { Icon, Button } from 'antd';
import { calculateSaveMoneyOfCombo } from '../../redux/selector/combo';
import { formatVND, upperCaseFirstCharacter } from '../../utils';
const ComboDetail = ({ history, location }) => {
    const goBack = () => {
        history.goBack();
    };
    const combo = useMemo(() => {
        return location.state && location.state.combo
    }, [location])
    const saveMoney = useMemo(() => {
        let result = 'cập nhật...'
        if (combo !== undefined)
            result = calculateSaveMoneyOfCombo(combo)
        return result
    }, [combo])

    const services = useMemo(() => {
        if (combo !== undefined)
            return combo.voucher_array.map(voucher => 'Waza' + upperCaseFirstCharacter(voucher.category)).join(', ')
        return '...'
    }, [combo])
    const goBuyCombo = () => {
        history.push({
            pathname: `/p/buy/${combo._id}`,
            state: {
                combo
            }
        })
    }

    return combo === undefined ? (
        <Redirect to="/p/home" />
    ) : (
            <div className="combo-detail">
                <div className="combo-detail__header d-flex-center">
                    <b>{combo.combo_name}</b>
                    <Icon type="left" onClick={goBack} />
                </div>
                <div className="combo-detail__body">
                    <div className="short-description d-flex-center">
                        <span className="short-description__day">
                            {`Gói tiết kiệm ${combo.days} ngày`}
                        </span>
                        <span className="short-description__price">
                            ₫{formatVND(combo.value)}
                        </span>
                        <span className="short-description__save">
                            <Icon type="forward" />
                            {`Tiết kiệm ₫${formatVND(saveMoney)}`}
                            <Icon type="backward" />
                        </span>
                    </div>
                    <div className="vouchers-detail">
                        <p className="vouchers-detail__title">Chi tiết gói Hội Viên</p>
                        {combo.voucher_array.map((voucher, index) => (
                            <div key={index} className="vouchers-detail__item d-flex-center">
                                <b className="service"> {upperCaseFirstCharacter(voucher.category)} Vouchers</b>
                                <span> <b>{voucher.count}</b> Ưu đãi </span>
                                <span>
                                    <Icon type="forward" />
                                    {`${voucher.discount > 0 ? voucher.discount + '% tối đa' : ''} ₫${formatVND(voucher.value)}`}
                                    <Icon type="backward" />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="term">
                        <div className="list">
                            <p>Điều khoản và điều kiện về phiếu ưu đãi</p>
                            <ul className="content">
                                <li>
                                    Ưu đãi chỉ áp dụng cho các dịch vụ {services}.
                            </li>
                                <li>
                                    Các ưu đãi chỉ có hiệu lực trong khoản thời gian đăng ký.
                            </li>
                                <li>
                                    Trong trường hợp cước phí di chuyển cao hơn giá trị mã ưu đãi, khách hàng vui lòng thanh toán phần chênh lệch thông qua tiền mặc hoặc Ví điện tử Waza.
                            </li>
                            </ul>
                        </div>
                        <div className="list">
                            <p>Điều khoản và điều kiện về gói Hội Viên</p>
                            <ul className="content">
                                <li>
                                    ---- Cách sử dụng ----
                            </li>
                                <li>
                                    1: Mua gói và nhận ngay trong "Gói hội viên/Gói hội viên của tôi".
                            </li>
                                <li>
                                    2: Chọn gói hội viên khi bạn muốn sử dụng trên các dịch vụ khác của Waza. Mức giá cuối cùng sẻ hiển thị khi ưu đãi được áp dụng thành công.
                            </li>
                                <li>
                                    3: Sử dụng các ưu đãi này trong vòng 14 ngày kể từ ngày mua/thanh toán gói.
                            </li>
                                <li>
                                    ---- Gói Hội Viên - Điều khoản và Điều kiện ----
                            </li>
                                <li>
                                    Các ưu đãi của Gói Hội Viên có thể thay đỗi mỗi chu kỳ.
                            </li>
                                <li>
                                    Các ưu đãi của Gói Hội Viên không thể chuyển nhượng, không thể sử dụng chung với các khuyễn mãi khác của Waza và không có giá trị quy đổi thành tiền mặt.
                            </li>
                                <li>
                                    Gói Hội Viên được thiết kế theo hình thức trả trước và khách hàng có thể thanh toán bằng Ví điện tử Waza trên ứng dụng.
                            </li>
                                <li>
                                    Gói Hội Viên sau khi mua sẻ hiện tại mục "Gói hội viên/Gói hội viên của tôi".
                            </li>
                                <li>
                                    Gói Hội viên sẻ tự động gia hạn cho những kỳ tiếp theo, trừ khi bạn không còn số dư trong Ví diện tử Waza hoặc đã hủy gia hạn trước đó.
                            </li>
                                <li>
                                    Chúng tôi không thể hoàn tiền lại sau kh khách hàng đã mua Gói Hội Viên. Nếu muốn hủy gia hạn Gói Hội Viên, khách hàng nên thực hiên trước khi bắt đầu đăng kí mới. Việc hủy gia hạn sẻ có hiệu lực ngay tại thời điểm hủy.
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="combo-detail__footer">
                    <Button onClick={goBuyCombo} className="buy-combo">Mua gói Hội Viên này</Button>
                </div>
            </div>
        )
}

export default ComboDetail