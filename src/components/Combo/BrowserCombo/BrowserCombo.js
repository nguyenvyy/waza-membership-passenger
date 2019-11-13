import React, { useEffect } from 'react'
import { LoadingAdvance } from '../../common/Loading/Loading'
import { Empty } from '../../common/Empty/Empty'
import { PolicyCard } from '../PolicyCard/PolicyCard'
import './BrowserCombo.scss'

export const BrowserCombo = ({combos, fetchActiveCombos, isFetching, comboGroups}) => {
    useEffect(() => {
        if(combos.length === 0) 
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

            </Empty>
        </LoadingAdvance>
    )
}