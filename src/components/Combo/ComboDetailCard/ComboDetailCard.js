import React, {  useMemo } from 'react'
import { Link } from 'react-router-dom'
import './ComboDetailCard.scss'
import { formatVND, upperCaseFirstCharacter } from '../../../utils'
import { calculateSaveMoneyOfCombo } from '../../../redux/selector/combo'
import { comboPath } from '../../../config/route-config'
import { Button } from 'antd'
export const ComboDetailCard = ({ combo }) => {
    const saveMoney = useMemo(() => {
        return calculateSaveMoneyOfCombo(combo)
    }, [combo])

    // const goBuyCombo = () => {

    // }

    return (
        <div className="card-wrapper">
            <div className="combo-detail-card">
                <div className="combo-detail-card__header d-flex-center">
                    <p className="name">
                        {combo.combo_name}
                    </p>
                    <div>
                        <span className="price">
                            đ{formatVND(combo.value)}
                        </span>
                        <span className="day">
                        {` /${combo.days} ngày`}

                        </span>
                    </div>
                    <div className="save-money">
                        Tiết kiệm
                        <span>
                            {` đ${formatVND(saveMoney)}`}
                        </span>
                    </div>
                </div>
                <div className="combo-detail-card__body">
                    <ul className="voucher-list d-flex-center">
                        {combo.voucher_array.map(voucher => (
                        <li key={voucher._id}>
                            <span className="content">
                                {`${voucher.count} x Mã ưu đãi đ${formatVND(voucher.value)}  Waza${upperCaseFirstCharacter(voucher.category)}`}
                            </span>
                            </li>
                        ))}
                    </ul>
                    <div className="combo-detail-panel d-flex-center">
                            <Link className="combo-detail-panel__detail" to={`${comboPath}/detail/${combo._id}`}>Xem chi tiết hơn ></Link>
                            <Button className="combo-detail-panel__buy d-flex-center">Mua gói Hội Viên này</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}