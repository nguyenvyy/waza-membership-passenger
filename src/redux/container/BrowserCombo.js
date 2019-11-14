import { connect } from 'react-redux'
import { BrowserCombo } from '../../components/Combo/BrowserCombo/BrowserCombo'
import { fetchActiveCombos } from '../actions/active-combos/actions'
import { groupCombosByPolicy } from '../selector/combo'
const mapState = ({ activeCombo }) => {
    const { items, isFetching } = activeCombo
    const comboGroups = groupCombosByPolicy(activeCombo)
    return {
        combos: items,
        isFetching,
        comboGroups
    }
}

const mapDispatch = {
    fetchActiveCombos
}

export default connect(mapState, mapDispatch)(BrowserCombo)