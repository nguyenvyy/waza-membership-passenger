import React, { useMemo } from 'react'
import './PolicyCard.scss'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { comboGroupPath } from '../../../../config/route-config'
import { upperCaseFirstCharacter } from '../../../../utils'
export const PolicyCard = ({ policy, combos }) => {
    const history = useHistory()
    const goComboGroup = () => {
        history.push(`${comboGroupPath}/${policy._id}`)
    }

    const services = useMemo(() => {
        const serviceList = combos.map(combo => {
            return combo.voucher_array.map(voucher => voucher.category)
        })
        let result = [...new Set(serviceList.flat())].map(service => upperCaseFirstCharacter(service))
        return result.join(' ∙ ')
    }, [combos])


    return (
        <div className="policy-card d-flex-center" onClick={goComboGroup}>
            <div className="policy-card__top d-flex-center" >
                <span className="before"></span>
                <span className="after"></span>
                <span className="content">
                    {services}
                </span>
                <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="policy-card__bottom d-flex-center" >
                <div className="grid-wrapper">
                    <div className="content d-flex-center">
                        <b>
                            {policy.policy_name}
                        </b>
                    </div>
                    <Button >Xem Gói</Button>
                </div>
            </div>
        </div>
    )
}