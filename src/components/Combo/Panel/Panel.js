import React from 'react'

import './Panel.scss'
import { keys } from '../Combo'

export const ComboPanel = ({ handleChangeKey, activeKey }) => {

    return (
        <div className="combo-panel">
            <div className={`combo-panel__toggle ${activeKey === keys.browser ? 'combo-panel__toggle--active' : ''} d-flex-center`}
                onClick={() => handleChangeKey(keys.browser)}
            >
                Duyệt gói
            </div>
            <div className={`combo-panel__toggle ${activeKey === keys.myCombo ? 'combo-panel__toggle--active' : ''} d-flex-center`}
                onClick={() => handleChangeKey(keys.myCombo)}
            >
                Gói hội viên của tôi
            </div>
        </div>
    )
}