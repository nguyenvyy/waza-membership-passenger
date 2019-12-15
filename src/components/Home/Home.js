import React from 'react'
import { Header } from './Header/Header'
import { Panel } from './Panel/Panel'
import NewCombos from '../../redux/container/NewCombos'
const Home = ({
    user
}) => {

    return (
        <div className="home">
            <Header username={user.fullName} />
            <Panel/>
            <NewCombos />
        </div>
    )
}

export default Home
