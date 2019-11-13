import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom'
import { ComboPanel } from './Panel/Panel';
import { Loading } from '../common/Loading/Loading';
import { RouteWithSubRoutes } from '../../routes/RouteWithSubRoutes';

const Combo = ({ routes }) => {
	return (
		<div
		>
			<ComboPanel />
			<Suspense fallback={<Loading />}>
				<Switch>
					{routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
				</Switch>
			</Suspense>
		</div>
	);
};
export default Combo