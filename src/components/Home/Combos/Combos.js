import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Combos.scss';
import { ComboCard } from '../ComboCard/ComboCard';
import { LoadingAdvance, Loading } from '../../common/Loading/Loading';
import { HandleError } from '../../common/HandlError/HandleError';

export const Combos = ({ hasError, isCompleted, isFetching, fetchActiveCombos, newCombos }) => {
	useEffect(() => {
		if (isCompleted === false) fetchActiveCombos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};
	return (
		<div className="combos">
			<b className="combos__title"> Các gói hội viên mới</b>
			<LoadingAdvance loading={isFetching} render={() => <Loading height="240px" />}>
				{hasError ? (
					<div className="d-flex-center" style={{ height: '240px' }}>
						<HandleError retry={fetchActiveCombos} />
					</div>
				) : (
					<div className="combos__slick">
						<Slider {...settings}>
							{newCombos.map((combo, index) => <ComboCard combo={combo} key={index} />)}
						</Slider>
					</div>
				)}
			</LoadingAdvance>
		</div>
	);
};
