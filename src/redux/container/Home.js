import {connect} from 'react-redux'
import Home from '../../components/Home/Home'
const mapState = ({auth}) => {

    return {
        userInfo: {...auth.user}
    }
}

export default connect(mapState, undefined)(Home)