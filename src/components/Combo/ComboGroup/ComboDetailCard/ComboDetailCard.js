import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import './ComboDetailCard.scss'
import { useHistory } from 'react-router-dom'
import { formatVND, upperCaseFirstCharacter } from '../../../../utils'
import { calculateSaveMoneyOfCombo } from '../../../../redux/selector/combo'
import { comboPath, comboDetailPath } from '../../../../config/route-config'
import { Button } from 'antd'
export const ComboDetailCard = ({ combo }) => {
    const history = useHistory()
    const saveMoney = useMemo(() => {
        return calculateSaveMoneyOfCombo(combo)
    }, [combo])

    const goBuyCombo = () => {
        history.push({
            pathname: `/p/buy/${combo._id}`,
            state: {
                combo
            }
        })
    }

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
                                    {`${voucher.count} x Mã ưu đãi ${voucher.discount > 0 ? voucher.discount + '% tối đa' : ''} đ${formatVND(voucher.value)}  Waza${upperCaseFirstCharacter(voucher.category)}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="combo-detail-panel d-flex-center">
                        <Link className="combo-detail-panel__detail" to={
                            {
                                pathname: `${comboDetailPath}/${combo._id}`,
                                state: {
                                    combo
                                }
                            }
                        }>
                            Xem chi tiết hơn >
                        </Link>
                        <Button className="combo-detail-panel__buy d-flex-center" onClick={goBuyCombo}>Mua gói Hội Viên này</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}