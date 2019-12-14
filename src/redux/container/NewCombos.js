import { connect } from 'react-redux';
import { Combos } from '../../components/Home/Combos/Combos';
import { getNewCombos } from '../selector/combo';
import { fetchActiveCombos } from '../actions/active-combos/actions';
const mapState = ({ activeCombo }) => {
	const { isFetching, items, hasError, isFetched } = activeCombo;
	const newCombos = getNewCombos(items);
	return {
		newCombos,
		isFetching,
		hasError,
		isFetched
	};
};

export default connect(mapState, { fetchActiveCombos })(Combos);
