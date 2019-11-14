import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { LoadingAdvance } from '../../common/Loading/Loading'
import { Empty } from '../../common/Empty/Empty'
import { PolicyCard } from '../PolicyCard/PolicyCard'
import './BrowserCombo.scss'
import { comboGroupPath } from '../../../config/route-config'
import { Drawer } from 'antd'
import { ComboGroup } from '../ComboGroup/ComboGroup'

export const BrowserCombo = ({ combos, fetchActiveCombos, isFetching, comboGroups, history }) => {
    useEffect(() => {
        if (combos.length === 0)
            fetchActiveCombos()
    }, [combos.length, fetchActiveCombos])


    return (
        <LoadingAdvance loading={isFetching}>
            <Empty isEmpty={Object.keys(comboGroups).length === 0} >
                <div className="combo-group">
                    {
                        Object.keys(comboGroups).map(policyId => <PolicyCard key={policyId} policy={comboGroups[policyId].policy} />)
                    }
                </div>
                <Route path={`${comboGroupPath}/:id`} render={({match}) => {
                    const policyId = match.params.id;
                    const combos = comboGroups[policyId].combos
                    const policy = comboGroups[policyId].policy
                    return (
                        <div className="group">
                            <Drawer
                                placement="right"
                                width="100%"
                                height="100vh"
                                title={policy.policy_name}
                                headerStyle={
                                    {display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    backgroundColor: 'hsla(0, 0%, 0%, 0.49)',
                                    borderBottom: 'none',
                                    height: '7%', 
                                    color: 'red'}
                                }
                                bodyStyle={{backgroundColor: 'hsla(0, 0%, 0%, 0.49)', padding: '0',height: '93%'}}
                                closable={true}
                                onClose={() => history.goBack()}
                                visible={true}
                            >
                                <ComboGroup policy={policy} combos={combos}/>
                            </Drawer>
                        </div>
                    )
                }} />
            </Empty>
        </LoadingAdvance>
    )
}