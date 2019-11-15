import React from 'react'
import { Header } from './Header/Header'
import { Panel } from './Panel/Panel'
import { Combos } from './Combos/Combos'

const Home = ({
    user, wallet
}) => {

    return (
        <div className="home">
            <Header username={user.fullName} />
            <Panel balance={wallet.balance} />
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
            <Combos/>
        </div>
    )
}

export default Home
