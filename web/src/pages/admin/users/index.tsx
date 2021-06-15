import * as React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { UserPage } from './user';

export default function UsersFeatureModule() {
    let { path } = useRouteMatch();
    
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <Switch>
            <Route path={`${path}/user/:userUUid?`} component={UserPage} />
        </Switch>
    )
}