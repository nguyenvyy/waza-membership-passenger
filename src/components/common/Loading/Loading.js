import React from 'react';
import { Spin } from 'antd';

import './Loading.scss'

export const Loading = () => (
    <div className={`loading d-flex-center`}>
        <Spin size="large" />
    </div>
)


export const LoadingAdvance = ({loading = false, children, render =() => <Loading />}) => (
    loading ? render() : children
)