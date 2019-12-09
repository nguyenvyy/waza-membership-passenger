import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { LoadingAdvance } from '../../common/Loading/Loading'
import { Empty } from '../../common/Empty/Empty'
import './BrowserCombo.scss'
import { comboGroupPath } from '../../../config/route-config'
import { Drawer } from 'antd'
import { NotFound, NotFoundData } from '../../common/NotFound/NotFound'
import { PolicyCard } from './PolicyCard/PolicyCard'
import { ComboGroup } from '../ComboGroup/ComboGroup'
import { HandleError } from '../../common/HandlError/HandleError'

export const BrowserCombo = ({
    history,
    fetchActiveCombos,
    comboGroups,
    isFetching,
    hasError,
    isCompleted,
}) => {
    useEffect(() => {
        if (isCompleted === false)
            fetchActiveCombos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <LoadingAdvance loading={isFetching}>
            {
                hasError ? (
                    <div className="d-flex-center" style={{ height: "calc(100vh - 60px - 80px)" }}>
                        <HandleError retry={fetchActiveCombos} />
                    </div>
                ) : (
                        <Empty isEmpty={ isCompleted=== true && Object.keys(comboGroups).length === 0} alternative={
                            <div className="d-flex-center" style={{ height: "calc(100vh - 60px - 80px)" }}>
                                <NotFoundData content="Hiện tại đang không có gói vào được bán!" />
                            </div>
                        } >
                            <div className="combo-group">
                                {
                                    Object.keys(comboGroups).map(policyId => <PolicyCard combos={comboGroups[policyId].combos} key={policyId} policy={comboGroups[policyId].policy} />)
                                }
                            </div>
                            <Route path={`${comboGroupPath}/:id`} render={({ match }) => {
                                const policyId = match.params.id;
                                if (comboGroups[policyId] === undefined) {
                                    return <NotFound content="Xin lỗi, gói Hội Viên không được tìm thấy" />
                                }
                                const combos = comboGroups[policyId].combos.sort((a, b) => a.value - b.value)
                                const policy = comboGroups[policyId].policy
                                return (
                                    <div className="group">
                                        <Drawer
                                            placement="right"
                                            width="100%"
                                            height="100vh"
                                            title={policy.policy_name}
                                            headerStyle={
                                                {
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'hsla(0, 0%, 0%, 0.49)',
                                                    borderBottom: 'none',
                                                    height: '7%',
                                                    color: 'red'
                                                }
                                            }
                                            bodyStyle={{ backgroundColor: 'hsla(0, 0%, 0%, 0.49)', padding: '0', height: '93%' }}
                                            closable={true}
                                            onClose={() => history.goBack()}
                                            visible={true}
                                        >
                                            <ComboGroup policy={policy} combos={combos} />
                                        </Drawer>
                                    </div>
                                )
                            }} />
                        </Empty>
                    )
            }

        </LoadingAdvance>
    )
}