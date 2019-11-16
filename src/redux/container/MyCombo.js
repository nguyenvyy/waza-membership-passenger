import { connect } from 'react-redux';
import { MyCombo } from '../../components/Combo/MyCombo/MyCombo';
import { requestMyCombo } from '../actions/my-combos/actions';
const mapState = ({ myCombo, auth }) => {
	const { isFetching, items: combos, fetched } = myCombo;
	const { user } = auth;
	return {
		isFetching,
        combos,
		user,
		fetched
	};
};

const mapDispatch = {
	requestMyCombo
};

export default connect(mapState, mapDispatch)(MyCombo);
