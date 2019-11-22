import { connect } from 'react-redux'
import { Payment } from '../../components/Payment/Payment'
import { requestBuyCombo } from '../actions/my-combos/actions'
import { decreaseBalance } from '../actions/auth/actions'
const mapState = (state, ownProps) => {
    const {  auth: { wallet, user } } = state
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
    decreaseBalance
}
export default connect(mapState, mapDispatch)(Payment)