import React from 'react'
import { Header } from './Header/Header'
import { Panel } from './Panel/Panel'
import { Combos } from './Combos/Combos'

const Home = ({
    userInfo
}) => {

    return (
        <div className="home">
            <Header username={userInfo.name} />
            <Panel wallet={userInfo.wallet} />
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
        </div>
    )
}

export default Home
