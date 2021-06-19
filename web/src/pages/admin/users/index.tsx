import * as React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { UserEdit } from './edit';

export default function UsersFeatureModule() {
    let { path } = useRouteMatch();
    
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <h1>Users</h1>
        // <Switch>
        //     <Route path={`${path}/user/:userUUid?`} component={UserEdit} />
        // </Switch>
    )
}