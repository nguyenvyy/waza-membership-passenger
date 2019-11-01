import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Icon, Checkbox, Button } from 'antd'
import { useSelector } from 'react-redux'

import './LoginForm.scss'

export const LoginForm = () => {
    const isLoading = useSelector(state => state.auth.isLoading)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUsername = e => {
        const value = e.target.value.trimLeft()
        setUsername(value);
    }
    const onChangePassword = e => {
        const value = e.target.value
        setPassword(value);
    }

    const login = e => {

    }

    return (
        <Form className="login-form">
            <Form.Item
                validateStatus={username.trim() === '' ? 'error' : 'success'}
                help={username.trim() === '' ? 'Tên đăng nhập không được để trống' : ''}>
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    size="large"
                    className="login-form-input"
                    prefix={<Icon type="user" style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Tên tài khoản"
                />
            </Form.Item>
            <Form.Item
                validateStatus={password === '' ? 'error' : 'success'}
                help={password === '' ? 'Mật khẩu không được để trống' : ''}>
                <Input
                    value={password}
                    onChange={onChangePassword}
                    size="large"
                    className="login-form-input"
                    prefix={<Icon type="lock" style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Mật khẩu"
                />
            </Form.Item>
            <Form.Item >
                <div className="d-flex justify-content-between">
                    <Checkbox className="login-form-text">Ghi nhớ đăng nhập</Checkbox>
                    <Link to="/forgot" className="login-form-text">Quên mật khẩu</Link>
                </div>
            </Form.Item>
            <Form.Item>
                <Button loading={isLoading}
                    type="primary"
                    disabled={username.trim() === '' || password === ''}
                    onClick={login} className="login-form-button">Đăng nhập</Button>
            </Form.Item>
        </Form>
    )
}