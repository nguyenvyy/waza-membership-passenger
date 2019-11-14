import React from 'react'
import './NotFound.scss'

import { Link } from 'react-router-dom'
import { Icon } from 'antd'

export const NotFound = ({ content }) => (
    <div className="not-found d-flex-center">
        <div className="not-found__item bug">

            <Icon type="bug" theme="filled" />
        </div>
        <div className="not-found__item title">
            Đã có lỗi xảy ra trong quá trình
        </div>
        <div className="not-found__item content">
            {content}
        </div>
        <Link className="not-found__item goback" to="/p/home">
            <Icon type="forward" />
            Quay về trang chủ <Icon type="home" theme="filled" />

            <Icon type="backward" />
        </Link>
    </div>
)