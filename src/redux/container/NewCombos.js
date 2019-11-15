import { connect } from 'react-redux';
import { Combos } from '../../components/Home/Combos/Combos';
import { getNewCombos } from '../selector/combo';
import { fetchActiveCombos } from '../actions/active-combos/actions';
const mapState = ({ activeCombo }) => {
	const { isFetching, items } = activeCombo;
	const newCombos = getNewCombos(activeCombo);
	const isFetched = items.length === 0 ? false : true
	return {
		newCombos,
		isFetching,
		isFetched
	};
};

export default connect(mapState, { fetchActiveCombos })(Combos);
