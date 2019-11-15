import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Combos.scss';
import { ComboCard } from '../ComboCard/ComboCard';
import { LoadingAdvance, Loading } from '../../common/Loading/Loading';

export const Combos = ({ isFetched, isFetching, fetchActiveCombos, newCombos }) => {
	useEffect(() => {
		if (isFetched === false) fetchActiveCombos();
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
			<b className="combos__title">
				{' '}
				Các gói hội viên mới {(!newCombos.length && isFetched) && ': Hiện tại đang không có'}
			</b>
			<LoadingAdvance loading={isFetching} render={() => <Loading height="240px" />}>
				<div className="combos__slick">
					<Slider {...settings}>
						{newCombos.map((combo, index) => <ComboCard combo={combo} key={index} />)}
					</Slider>
				</div>
			</LoadingAdvance>
		</div>
	);
};
