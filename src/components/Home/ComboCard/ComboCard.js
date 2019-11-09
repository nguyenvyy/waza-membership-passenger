import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ComboCard.scss'
import { formatVND } from '../../../utils'
import { Card } from 'antd'

export const ComboCard = ({ combo }) => {
    const contentRef = useRef(null);
    const [displayMore, setDisplayMore] = useState(false)
    useEffect(() => {
        let content = contentRef.current.textContent
        if (content.length > 200) {
            contentRef.current.textContent = content.slice(0, 200) + '...'
            setDisplayMore(true)
        } else {
            setDisplayMore(false)
        }
    }, [contentRef])
    return (
        <div className="combo-card">
            <Card size="small" title="Gói Nhỏ 30 Ngày" bodyStyle={{height: '240px'}}>
                <div className="combo-card__body">
                    <div>
                        <p>Tiết kiệm {formatVND(1000000)}</p>
                        <div className="content">
                            <p ref={contentRef}>
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                                Thích hợp cho khách hàng lần đầu sử dụng 5 x Mã ưu đãi giảm 30% tối đa 91,000đ
                            </p>
                            {
                                displayMore && <Link to="/p/combo/detail/id">xem chi tiết</Link>
                            }
                        </div>

                    </div>
                    <div className="combo-card__footer">
                        <Link className="link" to="/p/combo/buy/id">Mua Ngay</Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}