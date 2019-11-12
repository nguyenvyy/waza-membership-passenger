import React, { useEffect, useMemo } from 'react'
import { LoadingAdvance } from '../../common/Loading/Loading'
import { Empty } from '../../common/Empty/Empty'


export const BrowserCombo = ({combos, fetchActiveCombos, isFetching}) => {
    useEffect(() => {
        if(combos.length === 0) 
            fetchActiveCombos()
    }, [])

    const displayCombos = useMemo(() => {
        if(combos.length > 0) {
            let result = combos.reduce((acc, curr) => {
                if(acc[curr.policy_id] === undefined) {
                    acc[curr.policy_id] = [curr]
                } else {
                    acc[curr.policy_id].push(curr)
                }
                return acc
            }, {})
            return result
        } else {
            return []
        }
    } , [combos])

    return (
        <LoadingAdvance loading={isFetching}>
            <Empty isEmpty={displayCombos.length === 0} >
                kakkakaka
            </Empty>
        </LoadingAdvance>
    )
}