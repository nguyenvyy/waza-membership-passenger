import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Panel.scss'
import { pathCombo } from '../../../config/route-config'
import { Icon } from 'antd'

export const ComboPanel = ({ activeKey }) => {
    const history = useHistory();
    return (
        <div className="combo-panel">
            <div className="combo-panel__header">
                <div className="title d-flex-center">
                    Gói Hội Viên
                </div>
                <div className="close" onClick={() => history.goBack()}>
                    <Icon type="close" />
                </div>
            </div>
            <div className="combo-panel__footer">
                <NavLink
                    to={`${pathCombo}/browser`}
                    activeClassName="toggle--active"
                    className={`toggle d-flex-center`}
                >
                    Duyệt gói
                </NavLink>
                <NavLink
                    to={`${pathCombo}/my`}
                    activeClassName="toggle--active"
                    className={`toggle d-flex-center`}
                >
                    Gói hội viên của tôi
                </NavLink>
            </div>
        </div>
    )
}