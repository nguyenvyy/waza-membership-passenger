import React, { useState, useMemo } from 'react'
import { Modal, Form, InputNumber, Button, message, Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import './RechargeWalletModal.scss'
import { formatVND, deleteformatVND } from '../../utils'
import { requestAddCash, transferCashToElectronicRequest } from '../../redux/actions/wallet/actions'
export const RechargeWalletModal = ({ visible, close }) => {
    const dispatch = useDispatch()
    const { cash, isFetching } = useSelector(state => state.wallet)
    const [rechargeMoney, setRechargeMoney] = useState(50000)
    const onChangeRechargeMoney = value => {
        setRechargeMoney(value)
    }
    const rechargeMoneyHasError = useMemo(() => {
        const realMoney = +rechargeMoney
        if (isNaN(realMoney) !== true && realMoney >= 50000 && realMoney <= 10000000 && realMoney % 1000 === 0) {
            return false
        }
        return true
    }, [rechargeMoney])

    const [transferMoney, setTransferMoney] = useState(50000)
    const onChangeTransferMoney = value => {
        setTransferMoney(value)
    }
    const transferMoneyHasError = useMemo(() => {
        const realMoney = +transferMoney
        if (isNaN(realMoney) !== true && realMoney <= cash && realMoney >= 50000 && realMoney <= 10000000 && realMoney % 1000 === 0) {
            return false
        }
        return true
    }, [transferMoney, cash])

    const handleRechargeMoney = () => {
        const money = +rechargeMoney
        dispatch(requestAddCash(money)).then(status => {
            if (status === 200) {
                message.success(`Bạn đã nạp ${formatVND(money)} VNĐ vào ví tiền mặc.`)
                setRechargeMoney(50000)
            } else {
                message.error(`Nạp tiền thất bại!`)
            }
        })
    }
    const handleTransferMoney = () => {
        const money = +transferMoney
        dispatch(transferCashToElectronicRequest(money)).then(status => {
            if (status === 200) {
                message.success(`Bạn đã chuyển ${formatVND(money)} VNĐ từ ví tiền mặc sang ví WAZA.`)
                setTransferMoney(50000)
                close()
            } else {
                message.error(`Chuyển tiền thất bại!`)
            }
        })
    }
    return (
        <Modal
            title="Chuyển tiền từ ví tiền mặc sang ví WAZA"
            onCancel={close}
            onOk={close}
            visible={visible}
            footer={[
                <Button onClick={close} key="cancel">Quay lai</Button>,
                <Button disabled={rechargeMoneyHasError} loading={isFetching} onClick={handleTransferMoney} key="ok">Chuyển tiền</Button>,
            ]}
        >
            <Form layout="horizontal">
                <div >
                    <p className="cash">Ví tiền mặc: {formatVND(cash)} VNĐ</p>
                </div>
                <Form.Item label="Nhập số tiền cần nạp:"
                    help="số tiền nạp tối thiểu là 50,000, tối đa 10,000,000 và phải là bội số của 1,000"
                    validateStatus={rechargeMoneyHasError ? 'error' : 'success'}
                >
                    <InputNumber
                        className="input-money"
                        width="200px"
                        size="large"
                        value={rechargeMoney}
                        step={50000}
                        min={50000}
                        max={10000000}
                        formatter={value => formatVND(value)}
                        parser={value => deleteformatVND(value)}
                        onChange={onChangeRechargeMoney}
                    />
                </Form.Item>
            </Form>
            <Divider >
                <Button loading={isFetching} onClick={handleRechargeMoney}>Nạp</Button>
            </Divider>
            <Form layout="horizontal">
                <Form.Item label="Nhập số tiền cần chuyển:"
                    help="số tiền chuyển tối thiểu là 50,000, tối đa 10,000,000 và phải là bội số của 1,000 và phải bé hơn số tiền mặc hiện có"
                    validateStatus={transferMoneyHasError ? 'error' : 'success'}
                >
                    <InputNumber
                        className="input-money"
                        width="200px"
                        size="large"
                        value={transferMoney}
                        step={50000}
                        min={50000}
                        max={10000000}
                        formatter={value => formatVND(value)}
                        parser={value => deleteformatVND(value)}
                        onChange={onChangeTransferMoney}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}