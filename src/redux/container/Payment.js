import { connect } from 'react-redux'
import { Payment } from '../../components/Payment/Payment'
import { requestBuyCombo } from '../actions/my-combos/actions'
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



export default connect(mapState, {requestBuyCombo})(Payment)