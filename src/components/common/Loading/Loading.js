import React from 'react';
import { Spin } from 'antd';

import './Loading.scss'

export const Loading = ({height}) => (
    <div className={`loading d-flex-center`} style={{height}}>
        <Spin size="large" />
    </div>
)   


export const LoadingAdvance = ({loading = false, children, render =() => <Loading />}) => (
    loading ? render() : children
)