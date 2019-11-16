import React, { useEffect } from 'react';
import './MyCombo.scss';
import { LoadingAdvance } from '../../common/Loading/Loading';
import { Empty } from '../../common/Empty/Empty';
import { NotFoundData } from '../../common/NotFound/NotFound';
import { MyComboCard } from './MyComboCard/MyComboCard';

export const MyCombo = ({ isFetching, user, combos, requestMyCombo, fetched }) => {
	useEffect(() => {
		if (fetched === false) requestMyCombo(user.email);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LoadingAdvance loading={fetched === false && isFetching}>
			<Empty
				isEmpty={combos.length === 0 && fetched}
				alternative={<NotFoundData content="Bạn không có gói Hội Viên nào. Hảy mua ngay!" />}
			>
				<div className="list-mycombo">
					{combos.map((combo) => <MyComboCard key={combo._id} combo={combo} />)}
				</div>
			</Empty>
		</LoadingAdvance>
	);
};
