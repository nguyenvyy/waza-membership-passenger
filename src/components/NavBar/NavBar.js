import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.scss'
import { Icon } from 'antd'

export const NavBar = () => {

    return (
        <nav className="bottom-nav">
            <div className="bottom-nav__item">
                <NavLink to="/p/home" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active" >
                    <Icon type="home" theme="filled" />
                    <span>Trang chủ</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/voucher" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="weibo-circle" theme="filled" />
                    <span>Voucher</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/combo" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="codepen-square" theme="filled" />
                    <span>Combo</span>
                </NavLink>
            </div>
            <div className="bottom-nav__item">
                <NavLink to="/p/user" className="bottom-nav__item-content" activeClassName="bottom-nav__item--active">
                    <Icon type="user" />
                    <span>Tài khoản</span>
                </NavLink>
            </div>
        </nav>
    )
}