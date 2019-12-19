import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import './History.scss'
import { fetchHistory, clearHistory } from '../../redux/actions/history/actions'
import { dateFormat } from '../../constant'
import { LoadingAdvance } from '../common/Loading/Loading'
import { HandleError } from '../common/HandlError/HandleError'
import { NotFoundData } from '../common/NotFound/NotFound'
import { Empty } from '../common/Empty/Empty'
import { Button, Icon } from 'antd'

const History = () => {
    const dispatch = useDispatch()
    const { items, isFetching, isFetched, hasError } = useSelector(state => state.history)
    useEffect(() => {
        if (isFetched === false && isFetching === false)
            dispatch(fetchHistory())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const retry = () => {
        dispatch(fetchHistory())
    }
    const reload = () => {
        dispatch(clearHistory())
        dispatch(fetchHistory())
    }
    return (

        <LoadingAdvance loading={isFetching && isFetched === false}>
            {
                hasError ? (
                    <div className="d-flex-center" style={{ height: "100vh" }}>
                        <HandleError retry={retry} />
                    </div>
                ) : (
                        <Empty isEmpty={isFetched === true && items.length === 0} alternative={
                            <div className="d-flex-center" style={{ height: "100vh" }}>
                                <NotFoundData content="Rỗng" />
                            </div>
                        } >
                            <div className="history">
                                <div className="reload d-flex-center">
                                    <Icon onClick={reload}  type="reload" />  
                                </div>
                                {
                                    items.map(item => (
                                        <div key={item._id} className="action">
                                            <div className="action__name">{item.action}</div>
                                            <div className="d-flex justify-content-between">
                                                <span className="action__title">{item.title}</span>
                                                <span className="action__date">{moment(item.date).format('HH:mm - ' + dateFormat)}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Empty>
                    )
            }
        </LoadingAdvance>
    )
}

export default History