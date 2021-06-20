import * as React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { UserEdit } from './edit';

export default function UsersFeatureModule() {
    let { path } = useRouteMatch();

    return (
        <h1>Users</h1>
    )
}