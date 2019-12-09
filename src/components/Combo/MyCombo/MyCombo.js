import React, { useEffect } from 'react';
import './MyCombo.scss';
import { LoadingAdvance } from '../../common/Loading/Loading';
import { Empty } from '../../common/Empty/Empty';
import { NotFoundData } from '../../common/NotFound/NotFound';
import { MyComboCard } from './MyComboCard/MyComboCard';
import { HandleError } from '../../common/HandlError/HandleError';

export const MyCombo = ({ 
	isFetching,
	hasError,
	user, 
	combos, 
	requestMyCombo, 
	isCompleted }) => {
	useEffect(() => {
		if (isCompleted === false) requestMyCombo(user._id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LoadingAdvance loading={isFetching}>
			{
				hasError ? (
					<div className="d-flex-center" style={{ height: "calc(100vh - 60px - 80px)" }}>
						<HandleError retry={() => requestMyCombo(user._id)} />
					</div>
				) : (
					<Empty
						isEmpty={combos.length === 0 && isCompleted}
						alternative={
							<div className="d-flex-center" style={{height: "calc(100vh - 60px - 80px)" }}>
								<NotFoundData content="Bạn không có gói Hội Viên nào." />
							</div>
						}
					>
						<div className="list-mycombo">
							{combos.map((combo) => <MyComboCard key={combo._id} combo={combo} />)}
						</div>
					</Empty>
				)
			}
		</LoadingAdvance>
	);
};
