import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Panel.scss'
import { comboPath } from '../../../config/route-config'
import { Icon } from 'antd'

export const ComboPanel = ({ activeKey }) => {
    const history = useHistory();
    return (
        <div className='combo-panel-wrapper'>
            <div className="combo-panel">
                <div className="combo-panel__header">
                    <div className="title d-flex-center">
                        Gói Hội Viên
                    </div>
                    <div className="close" onClick={() => history.push('/p/home')}>
                        <Icon type="close" />
                    </div>
                </div>
                <div className="combo-panel__footer">
                    <NavLink
                        to={`${comboPath}/browser`}
                        activeClassName="toggle--active"
                        className={`toggle d-flex-center`}
                    >
                        Duyệt gói
                    </NavLink>
                    <NavLink
                        to={`${comboPath}/my`}
                        activeClassName="toggle--active"
                        className={`toggle d-flex-center`}
                    >
                        Gói hội viên của tôi
                    </NavLink>
                </div>
            </div>
        </div>
    )
}