import React from "react";
import { Route, Switch } from "react-router";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Navbar } from "../../components/environment/navbar";
import { getLazyLoadContainerFor } from "../../lib/lazyLoading";
import { mainMenu } from "./menu";
import { Admin } from './styles';

export default function AdminModule() {
	const { push } = useHistory()
	const { path } = useRouteMatch();
	
	const EntrancesPage = getLazyLoadContainerFor(() => import('./entrances'));
	const EntranceEditPage = getLazyLoadContainerFor(() => import('./entrances/edit'));

	return (
		<Admin>
			<Navbar items={mainMenu} />
			<h1>Admin</h1>
			<Switch>
			  <Route path={`${path}/lancamentos/adicionar`} component={EntranceEditPage} />
				<Route path={`${path}/lancamentos/editar/:id?`} component={EntranceEditPage} />
				<Route path={`${path}/lancamentos`} component={EntrancesPage} />
			</Switch>
		</Admin>
	)
}