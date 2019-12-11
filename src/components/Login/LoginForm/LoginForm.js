import React, { useState, useEffect } from 'react'
import { Form, Input, Icon, Checkbox, Button, message } from 'antd'
import { requestLogin, receiveUser } from '../../../redux/actions/auth/actions'
import './LoginForm.scss'

export const LoginForm = ({ isLoading, dispatch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false)
    useEffect(() => {
        const userStorage = localStorage.getItem('user-waza-membership')
        if (userStorage !== null) {
            const user = JSON.parse(userStorage)
            dispatch(receiveUser(user))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onChangeRemember = e => {
        setIsRemember(!isRemember)
    }
    const onChangeUsername = e => {
        const value = e.target.value.trimLeft()
        setEmail(value);
    }
    const onChangePassword = e => {
        const value = e.target.value
        setPassword(value);
    }

    const login = _ => {
        dispatch(requestLogin(email, password, isRemember)).then(res => {
            if (res === 200) {
                message.success('Đăng nhập thành công', 1)

            } else {
                message.error('Email hoặc mật khẩu không hợp lệ', 1)
            }
        })
    }

    return (
        <Form className="login-form">
            <Form.Item
                validateStatus={email.trim() === '' ? 'error' : 'success'}
                help={email.trim() === '' ? 'Email không được để trống' : ''}>
                <Input
                    value={email}
                    onChange={onChangeUsername}
                    size="large"
                    className="login-form-input"
                    prefix={<Icon type="user" style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
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
                    <Checkbox className="login-form-text" onChange={onChangeRemember}>Ghi nhớ đăng nhập</Checkbox>
                </div>
            </Form.Item>
            <Form.Item>
                <Button loading={isLoading}
                    type="primary"
                    disabled={email.trim() === '' || password === ''}
                    onClick={login} className="login-form-button">Đăng nhập</Button>
            </Form.Item>
        </Form>
    )
}