import React, { useState, useMemo } from 'react'
import { Modal, Form, InputNumber, Button, message } from 'antd'
import { useDispatch } from 'react-redux'

import './RechargeWalletModal.scss'
import { formatVND, deleteformatVND } from '../../utils'
import { increaseBalance } from '../../redux/actions/auth/actions'
export const RechargeWalletModal = ({ visible, close }) => {
    const dispatch = useDispatch()
    const [money, setMoney] = useState(50000)
    const onChangeMoney = value => {
        setMoney(value)
    }
    const hasError = useMemo(() => {
        const realMoney = +money
        if (isNaN(realMoney) !== true && realMoney >= 50000 && realMoney <= 10000000 && realMoney % 1000 === 0) {
            return false
        }
        return true
    }, [money])

    const handleRecharge = () => {
        dispatch(increaseBalance(+money))
        message.success('Nạp tiền thành công', 1)
        setMoney(50000)
        close()
    }
    return (
        <Modal
            title="Nạp tiền vào ví Waza"
            onCancel={close}
            onOk={close}
            visible={visible}
            footer={[
                <Button onClick={close} key="cancel">Quay lai</Button>,
                <Button disabled={hasError} onClick={handleRecharge} key="ok">Nạp tiền</Button>,
            ]}
        >
            <Form layout="horizontal">
                <Form.Item label="Nhập số tiền cần nạp:"
                    help="số tiền tối thiểu là 50,000, tối đa 10,000,000 và phải là bội số của 1,000"
                    validateStatus={hasError ? 'error' : 'success'}
                >
                    <InputNumber
                        className="input-money"
                        width="200px"
                        size="large"
                        value={money}
                        step={50000}
                        min={50000}
                        max={10000000}
                        formatter={value => formatVND(value)}
                        parser={value => deleteformatVND(value)}
                        onChange={onChangeMoney}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}