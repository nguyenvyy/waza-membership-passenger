import React from 'react'

import './HandleError.scss'
import { Result, Button } from 'antd'

export const HandleError = ({ retry }) => (
    <div className="handle-error">
        <Result
            status="warning"
            title="Đã có lỗi trong quá trình thực hiện."
            extra={
                <Button className="retry" onClick={retry}>
                    Thử lại
                </Button>
            }
        />
    </div>
)