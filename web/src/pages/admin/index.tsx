import React from "react";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { getLazyLoadContainerFor } from "../../lib/lazyLoading";

export default function AdminModule() {
    const { path } = useRouteMatch();
    const UsersPages = getLazyLoadContainerFor(() => import('./users'));
    
    return (
        <Switch>
            <Route path={`${path}/users`} component={UsersPages} />
        </Switch>
    )
}