import { connect } from 'react-redux'
import { BrowserCombo } from '../../components/Combo/BrowserCombo/BrowserCombo'
import { fetchActiveCombos } from '../actions/active-combos/actions'
const mapState = ({ activeCombo }) => {
    const { items, isFetching } = activeCombo
    return {
        combos: items,
        isFetching
    }
}

const mapDispatch = {
    fetchActiveCombos
}

export default connect(mapState, mapDispatch)(BrowserCombo)