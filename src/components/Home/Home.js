import React from 'react'
import { Header } from './Header/Header'
import { Panel } from './Panel/Panel'
import { Combos } from './Combos/Combos'

const Home = ({
    user, wallel
}) => {

    return (
        <div className="home">
            <Header username={user.name} />
            <Panel balance={wallel.balance} />
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
        </div>
    )
}

export default Home
