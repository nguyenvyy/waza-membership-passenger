import {connect} from 'react-redux'
import Home from '../../components/Home/Home'
const mapState = ({auth}) => {
    const { user, wallet } = auth
    return {
        user, wallet
    }
}

export default connect(mapState, undefined)(Home)