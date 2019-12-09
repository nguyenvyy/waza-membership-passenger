import React from 'react'
import './NotFound.scss'

import { Link } from 'react-router-dom'
import { Icon, Result } from 'antd'

export const NotFound = ({ content }) => (
    <div className="not-found d-flex-center">
        <Result
            status="404"
            title="404"
            subTitle={<span className="sub-title">{content}</span>}
            extra={(
                <Link className="not-found__item goback" to="/p/home">
                    <Icon type="forward" />
                    Quay về trang chủ <Icon type="home" theme="filled" />
                    <Icon type="backward" />
                </Link>

            )}
        />
    </div>
)

export const NotFoundData = ({ content }) => (
    <div className="not-found-data d-flex-center">
        <div className="not-found__item content">
            {content}
        </div>
    </div>
)