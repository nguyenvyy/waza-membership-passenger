import { connect } from 'react-redux'
import { Payment } from '../../components/Payment/Payment'
import { requestBuyCombo } from '../actions/my-combos/actions'
import { subtractEMoney } from '../actions/wallet/actions'
import { fetchHistory } from '../actions/history/actions'
import { fetchNotification } from '../actions/notification/actions'
const mapState = (state, ownProps) => {
    const {  auth: { user }, wallet } = state
    const { location, history } = ownProps
    let combo
    if(location.state === undefined)
        combo = undefined
    else
        combo = location.state.combo
    return {
        combo,
        wallet,
        user,
        history
    }
}

const mapDispatch = {
    requestBuyCombo,
    subtractEMoney,
    fetchHistory,
    fetchNotification
}



export default connect(mapState, mapDispatch)(Payment)